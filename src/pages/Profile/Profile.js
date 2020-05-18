import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import "./Profile.css";

import Navbars from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

import editProfile from "./editProfile";
import editPassword from "./editPassword";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Container className="mt-5 pt-5 mb-4">
          <div>
            <h4 className="text-center mt-3 profileText">ACCOUNT SETTING</h4>
          </div>
          <div className="underlineProfile mx-auto mb-5"></div>

          <Row>
            <Link exact to="/profile" activeClassName="active" className="mr-3">
              <i class="fas fa-user mr-2"></i>Edit Profile
            </Link>
          </Row>
          <Row>
            <Link to="/profile/editpassword" activeClassName="active">
              <i class="fas fa-lock mr-2"></i>Edit Password
            </Link>
          </Row>

          <Switch>
            <Route exact path="/profile" component={editProfile}></Route>

            <Route
              path="/profile/editpassword"
              component={editPassword}
            ></Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile;
