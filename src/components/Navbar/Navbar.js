import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import "./Navbar.css";
import Logo from "./../../image/logo.png";

class Navbars extends Component {
  render() {
    return (
      <Navbar bg="white" variant="light" className="navbar fixed-top">
        <Link to="/" className="ml-3 brand">
          <img src={Logo} alt="logo" />
        </Link>

        <Nav className="ml-auto">
          <Button
            className="signInButton mr-3 btn both-line-dark"
            href="/event"
          >
            <i class="fas fa-plus mr-2"></i>
            Create Events
          </Button>
          <Button className="signInButton btn both-line-dark" href="/login">
            Sign In
            <i class="fas fa-sign-in-alt ml-2"></i>
          </Button>
          <NavDropdown
            className="mr-5 pr-4 ml-4"
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
