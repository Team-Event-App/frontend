import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import "./Navbar.css";

class Navbars extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" className="navbar">
        <Link to="/" className="ml-3 brand">
          Brand Name
        </Link>

        <Nav className="ml-auto">
          <Button className="signInButton mr-3" href="/event">
            <i class="fas fa-plus mr-2"></i>
            Create Events
          </Button>
          <Button className="signInButton" href="/login">
            Sign In
            <i class="fas fa-sign-in-alt ml-2"></i>
          </Button>
          <NavDropdown
            className="mr-5 ml-3"
            title={
              <span>
                <i className="fa fa-user fa-fw"></i>Profile
              </span>
            }
          >
            <NavDropdown.Item>
              <i className="fas fa-envelope fa-fw"></i> User Profile
            </NavDropdown.Item>
            <NavDropdown.Item>
              <i className="far fa-clock mr-2"></i>History Purchase
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <i className="fas fa-sign-out-alt "></i> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
export default Navbars;
