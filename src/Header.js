import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom'



class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      render() {
        return (
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">PERN E-Sports</NavbarBrand>
              {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> */}
              {/* <Collapse isOpen={!this.state.collapsed} navbar> */}
                <Nav pills>
                  <NavItem>
                    <NavLink to="/" activeClassName="navbarLink">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/Events" activeClassName="navbarLink">Events</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/Teams" activeClassName="navbarLink">Teams</NavLink>
                  </NavItem> 
                  <NavItem>
                  <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                  </NavItem>
                </Nav>
              {/* </Collapse> */}
            </Navbar>
            
          </div>

        );
      }
    }
export default Header;