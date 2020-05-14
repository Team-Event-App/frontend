import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/loginActions";
import { connect } from "react-redux";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import "./Navbar.css";
import Logo from "./../../image/logo.png";

const Navbars = (props) => {
  let privateRoute;
  const [data, setData] = useState();
  const [viewLogin, setViewLogin] = useState();
  const history = useHistory();
  const logOut = () => {
    props.logout();
    history.push("/login");
  };
  useEffect(() => {
    if (props.viaLogin) {
      privateRoute = (
        <>
          <NavDropdown
            className="mr-3 pr-3 ml-4"
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
              <i className="fas fa-bookmark mr-2"></i>Bookmark
            </NavDropdown.Item>

            <NavDropdown.Item>
              <i className="far fa-clock mr-2"></i>History Purchase
            </NavDropdown.Item>
          </NavDropdown>
        </>
      );
      setViewLogin(
        <NavDropdown.Item>
          <Link
            className="fas fa-sign-out-alt  logout-button mr-3"
            onClick={logOut}
          >
            Logout
          </Link>
        </NavDropdown.Item>
      );
      setData(privateRoute);
    } else {
      setData();
      setViewLogin(
        <Button className="signInButton btn both-line-dark" href="/login">
          Sign In
          <i class="fas fa-sign-in-alt ml-2"></i>
        </Button>
      );
    }
  }, [props.viaLogin]);
  return (
    <Navbar bg="white" variant="light" expand="lg" className="navbar fixed-top">
      <Link to="/" className="ml-3 brand">
        <img src={Logo} alt="logo" />
      </Link>
      <Navbar.Toggle aria-controls="toogle" />
      <Navbar.Collapse id="toogle">
        <Nav className="ml-auto">
          <Button
            className="signInButton mr-3 btn both-line-dark"
            href="/event"
          >
            <i class="fas fa-plus mr-2"></i>
            Create Events
          </Button>
        </Nav>
        <Nav>{data}</Nav>
        <Nav>{viewLogin}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    viaLogin: state.login.viaLogin,
  };
};
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);
