import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment';

class EventCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            name: '',
            date: '',
            teams: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/tevent/create`, {
            method: 'POST',
            body: JSON.stringify({ TEvent: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((teventData) => {
            this.props.updateEventsArray();
            this.setState({
                id: '',
                name: '',
                date: '',
                teams: ''
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Log an Event</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input id="name" type="text" name="name" value={this.state.name} placeholder="enter name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input id="date" type="text" name="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="teams">Teams</Label>
                        <Input id="teams" type="text" name="teams" value={this.state.teams} placeholder="enter team count" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default EventCreate;