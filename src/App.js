import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
import Header from './Header'
import Splash from './Splash'
import Auth from './auth/Auth'
import EventIndex from './Events/EventIndex'
import TeamIndex from './Teams/TeamIndex'

 class App extends Component {
    constructor() {
      super();
      this.state = {
        sessionToken: '',
      }
    }
    componentWillMount() {
      const token = localStorage.getItem('token')
      if (token && !this.state.sessionToken) {
        this.setState({ sessionToken: token });
      }
    }
    setSessionState = (token) => {
      localStorage.setItem('token', token);
      this.setState({ sessionToken: token });
    }
    logout = () => {
      this.setState({ sessionToken: ''});
      localStorage.clear();
    }
    protectedViews = () => {
      if (this.state.sessionToken === localStorage.getItem('token')) {
        return (
          <Switch>
            <Route path='/' exact>
              <Splash sessionToken={this.state.sessionToken} />
            </Route>
            <Route path='/events' exact>
              <EventIndex sessionToken={this.state.sessionToken} />
            </Route>
            <Route path='/teams' exact>
              <TeamIndex sessionToken={this.state.sessionToken} />
            </Route>
          </Switch>
        )
      } else {
        return (
          <Route path="/auth" >
            <Auth setToken={this.setSessionState}/>
          </Route>
        )
      }
    }

    render() {
      return (
        <Router>
          <div>
            <Header clickLogout={this.logout} />
            {this.protectedViews()}
          </div>
        </Router>
      );
    }
  }
  export default App;