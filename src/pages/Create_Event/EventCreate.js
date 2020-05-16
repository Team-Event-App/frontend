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
        alert("Success");
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
            <div className="mt-5 pt-5">
              <Navbars />
              <Form className="formCreate mb-5">
                <Container>
                  <Row className="justify-content-md-center">
                    <Col sm={6}>
                      <ol>
                        <h2 className="text-center pt-4 mb-2 titleCategory">
                          Create Event
                        </h2>
                        <div className="underlineEvent mx-auto mb-5"></div>
                      </ol>
                      <Card style={{ width: "35rem", marginLeft: "5rem" }}>
                        <Card.Body>
                          <div className="form-group">
                            <label className="subLabel ">Event Info</label>
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="title"
                              placeholder="Title"
                            />

                            <small class="form-text text-muted">
                              Your Event Main Title
                            </small>
                            <ErrorMessage name="title" />
                          </div>

                          <div className="form-group">
                            <select className="form-control inputText">
                              <Field
                                type="text"
                                className="form-control "
                                name="category"
                              />
                              <option></option>
                              <option>Art</option>
                              <option>Film</option>
                              <option>Festival</option>
                              <option>Fashion</option>
                              <option>Sport</option>
                              <option>Nightlife</option>
                              <option>Charity</option>
                            </select>
                            <small class="form-text text-muted">
                              Category Event Required
                            </small>
                          </div>

                          <div className="form-group">
                            <Field
                              type="number"
                              className="form-control inputText"
                              name="limitPeople"
                              placeholder="Max People"
                            />
                          </div>

                          <div className="form-group">
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="organizerName"
                              placeholder="Organizer Name"
                            />
                          </div>
                          <div className="form-group">
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="responsibleName"
                              placeholder="Responsible Name"
                            />
                          </div>

                          <div className="form-group">
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="description"
                              placeholder="Description"
                            />
                          </div>

                          <div className="form-group">
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="time"
                              placeholder="Time"
                            />
                          </div>

                          <div className="form-group">
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="location"
                              placeholder="Venue Location"
                            />
                          </div>

                          <div className="form-group">
                            <Field
                              type="date"
                              className="form-control inputText"
                              name="date"
                              placeholder="Date"
                            />
                          </div>

                          <div className="form-group">
                            <div className="input-group-prepend">
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
                          </div>

                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control inputText"
                              name="imageEvent"
                              ref={this.imageRef}
                            />
                          </div>

                          <div className="form-group">
                            <Field
                              name="detail"
                              as="textarea"
                              rows="4"
                              className="form-control inputText"
                              placeholder="Detail"
                            />
                          </div>

                          <Button
                            variant="outline-danger"
                            block
                            type="submit"
                            disabled={formProps.isSubmitting}
                          >
                            Add event
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
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
