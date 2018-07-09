import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EventCreate from './EventCreate';
import EventTable from './EventTable';
import EventEdit from './EventEdit';
import APIURL from '../helpers/environment';
import './EventIndex.css';

class EventIndex extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            TEvent: [],
            updatePressed: false,
            TEventToUpdate: {}
        }
    }
    
    componentWillMount() {
        this.fetchEvents()
    }

    fetchEvents = () => {
        fetch(`${APIURL}/api/tevent/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((teventData) => {
                return this.setState({ TEvent: teventData })
            })
    }

    TEventDelete = (event) => {
        fetch(`${APIURL}/api/tevent/delete`, {
          method: 'DELETE',
          body: JSON.stringify({ TEvent: { id: event.target.id } }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => this.fetchEvents())
    }

    TEventUpdate = (event, tevent) => {
        fetch(`${APIURL}/api/tevent/updateevent`, {
          method: 'PUT',
          body: JSON.stringify({ TEvent: tevent }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => {
          this.setState({ updatePressed: false })
          this.fetchEvents();
        })
    }

    setUpdatedTEvent = (event, tevent) => {
        this.setState({
            TEventToUpdate: tevent,
            updatePressed: true
        })
    }

    render() {
        const TEvent = this.state.TEvent.length >= 1 ?
        <EventTable TEvent={this.state.TEvent} delete={this.TEventDelete} update={this.setUpdatedTEvent} /> : <h2>Log at least one event to see a table</h2>
        return (
          <Container className="event-container">
            <Row>
                <Col md="3">
                <EventCreate token={this.props.token} updateEventsArray={this.fetchEvents} />
                </Col>
                <Col md="9">
                    {TEvent}
                </Col>
                <Col md="12">  
                    {
                        this.state.updatePressed ? <EventEdit t={this.state.updatePressed} update={this.TEventUpdate} TEvent={this.state.TEventToUpdate} />
                        : <div></div>
                    }
                </Col>
            </Row>
          </Container>
        )
    }
}

export default EventIndex;