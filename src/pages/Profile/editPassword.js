import React, { Component } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import profile from "./../../image/profile.png";

class editPassword extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <Card className="mx-auto mb-5" style={{ width: "36rem" }}>
              <Row>
                <Col md={4}>
                  <Card.Img
                    className="mt-5 ml-4 pt-4"
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
      </div>
    );
  }
}

export default editPassword;
