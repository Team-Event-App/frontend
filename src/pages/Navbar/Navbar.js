import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import "./Navbar.css";

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand to="#" className="mx-auto pl-5">
            Brand Name
          </Navbar.Brand>
          <Button className="signInButton">Sign In</Button>
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

        <Navbar
          bg="light"
          expand="lg"
          style={{ borderTop: "1px solid #c4c4c4" }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link to="#" className="navButton mr-3 ml-3">
                Home
              </Nav.Link>
              <Nav.Link to="#" className="navButton mr-3 ml-3">
                Events
              </Nav.Link>
              <Nav.Link to="#" className="navButton mr-3 ml-3">
                Book
              </Nav.Link>
              <Nav.Link to="#" className="navButton mr-3 ml-3">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navbars;
