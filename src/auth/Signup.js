import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: ''
            // email: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/api/user/signup`, {
            method: 'POST',
            body: JSON.stringify({User:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }

    validateForm() {
        return this.state.password.length > 6 && this.state.user_name.length > 6;
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="user_name" placeholder="Enter a Username greater than 6 characters" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="Enter a Password greater than 6 characters" onChange= {this.handleChange} />
                    </FormGroup>
                    <Button type="submit" disabled={!this.validateForm()}>Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Signup;