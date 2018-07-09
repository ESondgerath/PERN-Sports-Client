import React from 'react';
// import GamesList from './Games/GamesList';
import EventIndex from './Events/EventIndex';
import TeamIndex from './Teams/TeamIndex';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../../css/Splash.css'

var teamImg = require('./team.jpg');
var eventImg = require('./event.png');

const Splash = (props) => {
    return (
        <div>
            <Container className="main-container">
                <Row className="row">
                    <Col md="5" className="eventsBox">
                        <img src={eventImg} className="teamImg" alt=""/>
                    </Col>
                    <Col md="5" className="teamsBox">
                        <img src="https://i.ytimg.com/vi/_vAKVqMipQQ/maxresdefault.jpg" className="eventImg" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Splash;