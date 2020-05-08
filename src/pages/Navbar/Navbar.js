import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import "./Navbar.css";

class Navbars extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" className="navbar">
        <Navbar.Brand to="#">Brand Name</Navbar.Brand>
        <Nav className="mx-auto">
          <Link to="/" className="navButton mr-3 ml-3">
            Home
          </Link>
          <Link to="/event" className="navButton mr-3 ml-3">
            Events
          </Link>
          <Link to="/book" className="navButton mr-3 ml-3">
            Book
          </Link>
        </Nav>
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
            <i className="far fa-clock mr-2"></i>History Purchase
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <i className="fas fa-sign-out-alt "></i> Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    );
  }
}
export default Navbars;
