import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment';

class TeamCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            name: '',
            teamowner: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/teams/create`, {
            method: 'POST',
            body: JSON.stringify({ Teams: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((teamData) => {
            this.props.updateTeamsArray();
            this.setState({
                id: '',
                name: '',
                teamowner: ''
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Enter a new Team</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="name">Team Name</Label>
                        <Input id="name" type="text" name="name" value={this.state.name} placeholder="enter name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="teamowner">Team Admin</Label>
                        <Input id="teamowner" type="text" name="teamowner" value={this.state.teamowner} placeholder="enter team admin" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default TeamCreate;