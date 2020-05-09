import React, { Component } from "react";

import {
  Container,
  ButtonGroup,
  ToggleButton,
  Button,
  Form,
  Col,
  InputGroup,
} from "react-bootstrap";

import "./CreateEvent.css";

class createEvent extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center pt-5 titleCategory">Create Event</h2>
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
                    <option></option>
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
                  <Form.Label>Penanggung Jawab Event</Form.Label>
                  <Form.Control type="email" className="inputText" />
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group
                  as={Col}
                  md={5}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description Event</Form.Label>
                  <Form.Control as="textarea" rows="3" className="inputText" />
                </Form.Group>
              </Form.Row>
              <Form.Label className="subLabel pl-3 pb-2">Location</Form.Label>
              <Form.Row className="pl-3 " as={Col} md={8}>
                <ButtonGroup toggle className="pl-2">
                  <ToggleButton
                    type="radio"
                    name="online"
                    defaultChecked
                    value="1"
                    className="toggleButton"
                  >
                    Online
                  </ToggleButton>
                  <ToggleButton
                    type="radio"
                    name="offline"
                    value="2"
                    className="toggleButton"
                  >
                    Offline
                  </ToggleButton>
                  <ToggleButton
                    type="radio"
                    name="tbd"
                    value="3"
                    className="toggleButton"
                  >
                    TBD
                  </ToggleButton>
                </ButtonGroup>
              </Form.Row>
              <Form.Row className="pl-3 pt-3">
                <Form.Group as={Col} md={6} controlId="formBasicEmail">
                  <Form.Label className="pb-2">Venue Location</Form.Label>
                  <Form.Control type="email" className="inputText" />
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group as={Col} md={6} controlId="formBasicEmail">
                  <Form.Label className="subLabel pb-2">
                    Detail Event
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Title"
                    className="inputText"
                  />
                </Form.Group>
              </Form.Row>
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
                    <input type="date" className="pl-3 inputText"></input>
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
                  <Form.Control as="textarea" rows="3" className="inputText" />
                </Form.Group>
              </Form.Row>
              <Form.Group className="pl-3">
                <Button className="save">Save</Button>
              </Form.Group>
            </Container>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default createEvent;
