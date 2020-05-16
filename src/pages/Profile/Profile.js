import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./Profile.css";

import Navbars from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Container className="mt-5 pt-5 mb-4">
          <Row>
            <Col md={{ offset: 1, span: 3 }} className="mt-5">
              <Route>
                <Row>
                  <i class="fas fa-user mr-2"></i>Edit Profile
                </Row>
              </Route>
              <Route>
                <Row>
                  <i class="fas fa-lock mr-2"></i>Edit Password
                </Row>
              </Route>
            </Col>

            <Col md={4}>
              <Card className="mx-auto" style={{ width: "36rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="outline-danger"
                    className="buttonProfile "
                    block
                  >
                    Save
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile;
