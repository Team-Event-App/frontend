import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import "./Profile.css";

import Navbars from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

import profile from "./../../image/profile.png";

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
            <Col md={{ offset: 1, span: 3 }} className="mt-5">
              <>
                <Row className="ml-5 pl-5">
                  <i class="fas fa-user mr-2"></i>Edit Profile
                </Row>
              </>
              <>
                <Row className="ml-5 pl-5">
                  <i class="fas fa-lock mr-2"></i>Edit Password
                </Row>
              </>
            </Col>

            <Col md={4}>
              <Card className="mx-auto" style={{ width: "36rem" }}>
                <Row>
                  <Col md={4}>
                    <Card.Img
                      className="mt-5 ml-3"
                      src={profile}
                      style={{ width: "10rem" }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Form>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Current Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Current Password"
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>New Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="New Password"
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Confrim Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </Form.Group>
                      </Form>
                      <Button
                        variant="outline-danger"
                        className="buttonProfile "
                        block
                      >
                        Save
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={{ offset: 4, span: 5 }}>
              <Card>
                <Card.Img
                  src={profile}
                  className="mx-auto mb-2"
                  style={{ width: "10rem" }}
                />
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="email" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="email" placeholder="Phone Number" />
                      <Form.Text className="text-muted">
                        We'll never share your number with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Button
                      variant="outline-danger"
                      className="buttonProfile "
                      block
                    >
                      Save
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile;
