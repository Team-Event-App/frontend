import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import axios from "axios";

import "./EventCreate.css";
import Navbars from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class EventCreate extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  handleSubmit = (values, actions) => {
    console.log(values);
    var formData = new FormData();
    Object.keys(values).forEach(function (key) {
      formData.append(key, values[key]);
    });
    formData.append("imageEvent", this.imageRef.current.files[0]);
    const URL = `https://api.indrakawasan.com/event/create`;
    axios
      .post(URL, formData, {
        headers: {
          "access-token": localStorage.getItem("access-token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);

        actions.setSubmitting(false);
        actions.resetForm();
        alert("Succesfully add Event");
      });
  };

  render() {
    return (
      <Formik
        initialValues={{
          title: "",
          category: "",
          description: "",
          imageEvent: "",
          organizerName: "",
          responsibleName: "",
          time: "",
          location: "",
          date: "",
          limitPeople: "",
          price: "",
          detail: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.title) {
            errors.title = (
              <small className="form-text text-danger">Title is required</small>
            );
            return errors;
          }
        }}
        onSubmit={this.handleSubmit}
        render={(formProps, setFieldValue) => {
          return (
            <div className="mainEvent">
              <Navbars />
              <h2 className="text-center pt-5 titleCategory">Create Event</h2>
              <Form className="formCreate justify-content-center align-items-center">
                <Container>
                <Row className="justify-content-md-center">
                  <Card className="createEventCard">
                    <Card.Body>
                    <Col >
                      <label className="subLabel pb-2">
                        Event Info
                      </label>
                      <Field
                        type="text"
                        placeholder="Title"
                        className="form-control inputText"
                        name="title"
                      />
                      <small className="form-text text-muted">
                        Your Event Main Title.
                      </small>
                      <ErrorMessage name="title" />
                    </Col>
                    <Row className="pl-3">
                      <Col md={4}>
                        <select className="form-control inputText">
                          <Field
                            type="text"
                            className="form-control "
                            name="category"
                          />
                          <option></option>
                          <option>Music</option>
                                <option>Art</option>
                                <option>Film</option>
                                <option>Food & Drinks</option>
                                <option>Festival</option>
                                <option>Fashion</option>
                                <option>Sport</option>
                                <option>Nightlife</option>
                                <option>Charity</option>
                                <option>Education</option>
                        </select>
                      </Col>
                      <Col md={5}>
                        <Field
                          type="number"
                          className="form-control inputText"
                          placeholder="Max People"
                          name="limitPeople"
                        />
                      </Col>
                    </Row>
                    <Row className="pt-3 orgRow">
                      <Col md={2.6}>
                        <Field
                          type="text"
                          className="form-control inputText"
                          name="organizerName"
                          placeholder="Organizer Name"
                        />
                      </Col>
                      <Col md={2.6} className="pl-2">
                        <Field
                          type="text"
                          className="form-control inputText"
                          name="responsibleName"
                          placeholder="Responsible Name"
                        />
                      </Col>
                    </Row>
                    <Row className="pl-3 pt-3">
                      <Col md={5}>
                        <Field
                          type="text"
                          className="form-control inputText"
                          name="description"
                          placeholder="Description"
                        />
                      </Col>
                    </Row>
                    <label className="subLabel pl-3">
                      Location
                    </label>
                    <Row className="pl-3">
                      <Col xs={5} >
                        <Field
                          type="text"
                          className="form-control inputText"
                          name="location"
                          placeholder="Venue Location"
                        />
                      </Col>
                    </Row>
                    <Row className="pl-3">
                      <Col md={6}>
                        <label className="subLabel ">
                          Detail Event
                        </label>
                      </Col>
                    </Row>
                    <Row className="pl-3">
                      <Col md={6}>
                        <Field
                          type="text"
                          className="form-control inputText"
                          name="time"
                          placeholder="00.00 - 00.00"
                        />
                                              <small className="form-text text-muted">
                        Time Event
                      </small>
                      </Col>
                    </Row>
                    <Row className="pb-3">
                    <Col md={5}>
                        <div className="input-group-prepend pl-3">
                        <div className="input-group-text inputPrepend">
                                Rp.
                              </div>
                              <Field
                            type="number"
                            className="form-control inputText"
                            name="price"
                            placeholder="Price"
                          />
                          </div>

                      </Col>
                      <Col md={5}>
                      <Field
                            type="date"
                            className="form-control inputText "
                            name="date"
                            placeholder="Date"
                          /></Col>
                    </Row>
                    <Row className="pl-3">
                      <Col md={8}>
                        <input
                          type="file"
                          className="form-control inputText"
                          name="imageEvent"
                          ref={this.imageRef}
                        />
                      </Col>
                    </Row>
                    <Row className="pl-3 pb-3">
                      <Col as={Col} md={6}>
                        <label>Detail Event</label>
                        <Field
                          name="detail"
                          as="textarea"
                          rows="4"
                          className="form-control inputText"
                          placeholder="Detail"
                        />
                      </Col>
                    </Row>
                    <Col className="pl-3">
                      <Button
                        variant="outline-danger"
                        block
                        type="submit"
                        disabled={formProps.isSubmitting}
                      >
                        Add event
                      </Button>
                    </Col>
                    </Card.Body>
                    </Card>
                </Row>
                </Container>
              </Form>
              <Footer />
            </div>
          );
        }}
      />
    );
  }
}
export default EventCreate;
