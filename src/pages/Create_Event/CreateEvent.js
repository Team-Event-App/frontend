import React, { Component } from "react";
import { Formik } from 'formik';
import axios from 'axios';

import {
  Container,
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
        <Formik
        initialValues={{
          title:'',
          category:'',
          description:'',
          imageEvent : '',
          organizerName:'',
          responsibleName:'',
          typeEvent:'',
          location:'',
          date:'',
          limitPeople:'',
          detail:''
        }}
        onSubmit={(values,actions) => {
          axios({
            method:"POST",
            url:"http://localhost:8000/create",
            data:values
          })
        }}
        >
        {props => (
          <Form className="justify-content-center align-items-center" onSubmit={props.handleSubmit}>
          <Form.Row>
            <Container>
              <Form.Group as={Col} md={6}>
                <Form.Label className="subLabel">Event Info</Form.Label>
          <div class="underline mb-4"></div>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  className="inputText"
                  name="title"
                  value={props.values.title}
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
                    className="inputText"
                    name="category"
                    value={props.values.category}
                  >
                    <option></option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md={2}>
                  <Form.Label>People</Form.Label>
                  <Form.Control
                    name="maxPeople"
                    className="inputText"
                    placeholder="Max People"
                    value={props.values.limitPeople}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group as={Col} md={2.5}>
                  <Form.Label>Organizer Event</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Organizer Event"
                    className="inputText"
                    value={props.values.organizerName}
                  />
                </Form.Group>
                <Form.Group as={Col} md={3}>
                  <Form.Label>Penanggung Jawab Event</Form.Label>
                  <Form.Control type="email" className="inputText" 
                  value={props.values.responsibleName}
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
                  <Form.Control as="textarea" rows="3" className="inputText" 
                  value={props.values.description}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Label className="subLabel pl-4">Location</Form.Label>
              </Form.Row>

              <Form.Row className="pl-4">
              <div class="underlineLocation mb-2"></div>
              </Form.Row>
              <Form.Row className="pl-3 pt-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label className="pb-2">Venue Location</Form.Label>
                  <Form.Control type="text" className="inputText" value={props.values.location}/>
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group as={Col} md={6}>
                  <Form.Row className="pl-1">
                  <Form.Label className="subLabel">
                    Detail Event
                  </Form.Label>
                  </Form.Row>
                  <Form.Row className="pl-2">
              <div class="underlineDetail mb-2"></div>
              </Form.Row>
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
                      value={props.values.price}
                    />
                    <input type="date" className="pl-3 inputText" value={props.values.date}></input>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-4">
                <Form.Group className="inputText">
                  <Form.File id="custom-file" label="Upload Image" custom value={props.values.imageEvent}/>
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group
                  as={Col}
                  md={6}
                  controlId="exampleForm.ControlTextarea1"
                  value={props.values.detail}
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
        )}
        </Formik>
      </div>
    );
  }
}

export default createEvent;
