import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class EventEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            date: '',
            teams: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.TEvent.id,
            name: this.props.TEvent.name,
            date: this.props.TEvent.date,
            teams: this.props.TEvent.teams
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader >Edit an Event</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="eventname">Name</Label>
                                <Input id="eventname" type="text" name="name" value={this.state.name} placeholder="enter name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="eventdate">Date</Label>
                                <Input id="eventdate" type="text" name="date" value={this.state.date} placeholder="enter date" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="eventteams">Teams</Label>
                                <Input id="eventteams" type="text" name="teams" value={this.state.teams} placeholder="enter teams" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default EventEdit;