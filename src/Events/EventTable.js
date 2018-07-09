import React from 'react';
import { Table, Button } from 'reactstrap';
import './EventIndex.css';

const EventTable = (props) => {
    return (
        <div>
            <h3>Event History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Teams</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.TEvent.map((tevent, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{tevent.id}</th>
                                    <td>{tevent.name}</td>
                                    <td>{tevent.date}</td>
                                    <td>{tevent.teams}</td>
                                    <td>
                                        <Button id={tevent.id} onClick={props.delete} color="danger" className="delete-button">Delete</Button>|
                                        <Button id={tevent.id} onClick={e => props.update(e, tevent)} color="warning" className="update-button">Update</Button>
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

export default EventTable;