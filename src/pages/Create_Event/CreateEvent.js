import React, { Component } from "react";

import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import "./CreateEvent.css";

import Navbars from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class createEvent extends Component {
  render() {
    return (
      <div className="mt-5 pt-5">
        <Navbars />
        <Container>
          <Row>
            <Col>
              <h2 className="text-center pt-5 mb-4 titleCategory">
                Create Event
              </h2>
              <div className="underlineEvent mx-auto"></div>
            </Col>
          </Row>
          <Form className="justify-content-center align-items-center">
            <Form.Row>
              <Container>
                <Form.Group as={Col} md={6} controlId="formBasicEmail">
                  <Form.Label className="subLabel pb-2">Event Info</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Title"
                    className="inputText"
                  />
                  <Form.Text className="text-muted">
                    Your Event Main Title.
                  </Form.Text>
                </Form.Group>
                <Form.Row className="pl-3">
                  <Form.Group as={Col} md={2}>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      value="Choose..."
                      className="inputText"
                    >
                      <option>Category</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md={2}>
                    <Form.Label>People</Form.Label>
                    <Form.Control
                      className="inputText"
                      placeholder="Max People"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="pl-3">
                  <Form.Group as={Col} md={2.5} controlId="formBasicEmail">
                    <Form.Label>Organizer Event</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Organizer Event"
                      className="inputText"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={3} controlId="formBasicEmail">
                    <Form.Label>Dependent Event</Form.Label>
                    <Form.Control
                      type="email"
                      className="inputText"
                      placeholder="Dependent"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="pl-3">
                  <Form.Group
                    as={Col}
                    md={5}
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description Event</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Description"
                      className="inputText"
                      style={{ width: "33rem" }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row className="pl-3 pt-3">
                  <Form.Group as={Col} md={6} controlId="formBasicEmail">
                    <Form.Label className="pb-2">Venue Location</Form.Label>
                    <Form.Control
                      type="email"
                      className="inputText"
                      placeholder="Location"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row className="pl-3 mt-3"></Form.Row>
                <Form.Row className="pl-4">
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          id="inputGroupPrepend"
                          className="inputPrepand"
                        >
                          Rp.
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend"
                        name="price"
                        className="inputText"
                      />
                      <input
                        type="date"
                        className="pl-3 ml-3 inputText"
                      ></input>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row className="pl-4">
                  <Form.Group className="inputText">
                    <Form.File id="custom-file" label="Upload Image" custom />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="pl-3">
                  <Form.Group
                    as={Col}
                    md={6}
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Detail Event</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      className="inputText"
                      placeholder="Description Detail Event"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group className="pl-3">
                  <Button className="save">Save</Button>
                </Form.Group>
              </Container>
            </Form.Row>
          </Form>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default createEvent;
