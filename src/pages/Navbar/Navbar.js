import React, { Component } from "react";
import { Navbar, NavDropdown, Button } from "react-bootstrap";

import "./Navbar.css";

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand to="#" className="mx-auto">
            Brand Logo
          </Navbar.Brand>
          <Button>Sign In</Button>
          <NavDropdown
            className="mr-5 ml-3"
            title={
              <span>
                <i className="fa fa-user fa-fw"></i>Profile
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>
              <i className="fas fa-envelope fa-fw"></i> User Profile
            </NavDropdown.Item>
            <NavDropdown.Item>
              <i className="fas fa-cog "></i> Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <i className="fas fa-sign-out-alt "></i> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
    );
  }
}
export default Navbars;
