import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css'

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row className="auth-row">
                <Col md="5" className="signup-box">
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col md={{ size: 5, offset: 2 }} className="login-box">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;