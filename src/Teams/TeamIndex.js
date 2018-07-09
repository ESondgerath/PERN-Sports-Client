import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TeamCreate from './TeamCreate';
import TeamTable from './TeamTable';
import TeamEdit from './TeamEdit';
import APIURL from '../helpers/environment';
import './TeamIndex.css';

class TeamIndex extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            Teams: [],
            updatePressed: false,
            TeamsToUpdate: {}
        }
    }
    
    componentWillMount() {
        this.fetchTeams()
    }

    fetchTeams = () => {
        fetch(`${APIURL}/api/teams/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((teamData) => {
                return this.setState({ Teams: teamData })
            })
    }

    TeamsDelete = (event) => {
        fetch(`${APIURL}/api/teams/updateteams`, {
          method: 'DELETE',
          body: JSON.stringify({ Teams: { id: event.target.id } }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => this.fetchTeams())
    }

    TeamsUpdate = (event, team) => {
        fetch(`${APIURL}/api/teams/delete`, {
          method: 'PUT',
          body: JSON.stringify({ Teams: team }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => {
          this.setState({ updatePressed: false })
          this.fetchTeams();
        })
    }

    setUpdatedTeam = (event, team) => {
        this.setState({
            TeamsToUpdate: team,
            updatePressed: true
        })
    }

    render() {
        const Teams = this.state.Teams.length >= 1 ?
        <TeamTable Teams={this.state.Teams} delete={this.TeamsDelete} update={this.setUpdatedTeams} /> : <h2>Enter a new team to see a table</h2>
        return (
          <Container className="team-container">
            <Row>
                <Col md="3">
                <TeamCreate token={this.props.token} updateTeamsArray={this.fetchTeams} />
                </Col>
                <Col md="9">
                    {Teams}
                </Col>
                <Col md="12">  
                    {
                        this.state.updatePressed ? <TeamEdit t={this.state.updatePressed} update={this.TeamsUpdate} team={this.state.TeamsToUpdate} />
                        : <div></div>
                    }
                </Col>
            </Row>
          </Container>
        )
      }
}

export default TeamIndex;