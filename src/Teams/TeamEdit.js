import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class TeamEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            teamowner: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.Teams.id,
            name: this.props.Teams.name,
            teamowner: this.props.Teams.teamowner
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
                    <ModalHeader >Enter a new Team</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="name">Team Name</Label>
                                <Input id="name" type="text" name="name" value={this.state.name}
                                placeholder="enter name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="teamowner">Team Admin</Label>
                                <Input id="teamowner" type="text" name="teamowner" value={this.state.teamowner} placeholder="Team Admin" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default TeamEdit;