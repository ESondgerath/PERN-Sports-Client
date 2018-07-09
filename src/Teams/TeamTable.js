import React from 'react';
import { Table, Button } from 'reactstrap';
import './TeamIndex.css'

const TeamTable = (props) => {
    return (
        <div>
            <h3>Team Archive</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team name</th>
                        <th>Team Admin</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.Teams.map((team, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{team.id}</th>
                                    <td>{team.name}</td>
                                    <td>{team.teamowner}</td>
                                    <td>
                                        <Button id={team.id} onClick={props.delete} color="danger" className="delete-button">Delete</Button>|
                                        <Button id={team.id} onClick={e => props.update(e, team)} color="warning" className="update-button">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default TeamTable;