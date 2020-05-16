import React, { Component } from "react";
import axios from "axios";
import { Formik } from "formik";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import "./CreateEvent.css";

import Navbars from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class Index extends Component {
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
          <Row className="mx-auto pl-5">
            <Col>
              <Formik
                initialValues={{
                  title: "",
                  category: "",
                  description: "",
                  imageEvent: null,
                  organizerName: "",
                  responsibleName: "",
                  time: "",
                  location: "",
                  date: "",
                  limitPeople: "",
                  price: "",
                  detail: "",
                }}
                onSubmit={async (values) => {
                  let formData = new FormData();

                  formData.append("title", values.title);
                  formData.append("category", values.category);
                  formData.append("limitPeople", values.limitPeople);
                  formData.append("organizerName", values.organizerName);
                  formData.append("responsibleName", values.responsibleName);
                  formData.append("time", values.time);
                  formData.append("description", values.description);
                  formData.append("location", values.location);
                  formData.append("price", values.price);
                  formData.append("date", values.date);
                  formData.append("imageEvent", values.imageEvent);
                  formData.append("detail", values.detail);

                  const res = await axios(
                    "http://api.indrakawasan.com/event/create",
                    formData,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "multipart/form-data",
                        "access-token": localStorage.getItem("access-token"),
                      },
                    }
                  );
                  console.log(res);
                  alert("Create Event Success.");
                  console.log(formData.get("title"));
                  console.log(formData.get("category"));
                  console.log(formData.get("limitPeople"));
                  console.log(formData.get("organizerName"));
                  console.log(formData.get("responsibleName"));
                  console.log(formData.get("time"));
                  console.log(formData.get("description"));
                  console.log(formData.get("location"));
                  console.log(formData.get("price"));
                  console.log(formData.get("date"));
                  console.log(formData.get("imageEvent"));
                  console.log(formData.get("detail"));
                }}
              >
                {(props) => (
                  <Form
                    className="justify-content-center align-items-center"
                    onSubmit={props.handleSubmit}
                  >
                    <Form.Row>
                      <Container>
                        <Form.Group as={Col} md={6} controlId="formBasicEmail">
                          <Form.Label className="subLabel pb-2">
                            Event Info
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Title"
                            className="inputText"
                            name="title"
                            onChange={props.handleChange}
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
                              onChange={props.handleChange}
                              value={props.values.category}
                            >
                              <option></option>
                              <option>Art</option>
                              <option>Film</option>
                              <option>Music</option>
                              <option>Festival</option>
                              <option>Fashion</option>
                              <option>Sport</option>
                              <option>Nightlife</option>
                              <option>Charity</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group as={Col} md={2}>
                            <Form.Label>People</Form.Label>
                            <Form.Control
                              type="text"
                              className="inputText"
                              placeholder="Max People"
                              name="limitPeople"
                              onChange={props.handleChange}
                              value={props.values.limitPeople}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row className="pl-3">
                          <Form.Group
                            as={Col}
                            md={2.5}
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Organizer Event</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Organizer Event"
                              className="inputText"
                              name="organizerName"
                              onChange={props.handleChange}
                              value={props.values.organizerName}
                            />
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md={3}
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Penanggung Jawab Event</Form.Label>
                            <Form.Control
                              type="text"
                              className="inputText"
                              name="responsibleName"
                              onChange={props.handleChange}
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
                            <Form.Control
                              as="textarea"
                              rows="3"
                              className="inputText"
                              style={{ width: "33rem" }}
                              name="description"
                              onChange={props.handleChange}
                              value={props.values.description}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row className="pl-3 mt-2">
                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="pb-2">Time</Form.Label>
                            <Form.Control
                              type="text"
                              className="inputText"
                              name="time"
                              placeholder="Time"
                              onChange={props.handleChange}
                              value={props.values.time}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row className="pl-3 mt-3">
                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="pb-2">
                              Venue Location
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="inputText"
                              name="location"
                              onChange={props.handleChange}
                              value={props.values.location}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row className="pl-3">
                          <Form.Group
                            as={Col}
                            md={6}
                            controlId="formBasicEmail"
                          ></Form.Group>
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
                                onChange={props.handleChange}
                                value={props.values.price}
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
                            <input
                              type="file"
                              name="imageEvent"
                              id="imageEvent"
                              onChange={(event) => {
                                props.setFieldValue(
                                  "imageEvent",
                                  event.currentTarget.files[0]
                                );
                              }}
                            ></input>
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
                              name="detail"
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Group className="pl-3">
                          <Button className="save" type="submit">
                            Save
                          </Button>
                        </Form.Group>
                      </Container>
                    </Form.Row>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Index;
