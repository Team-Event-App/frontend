import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { showSuccess } from "./../../actions/modalActions";

import "./EventCreate.css";
import Navbars from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// const url = `${process.env.REACT_APP_API_URL}`;

class EventCreate extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.imageShowRef = React.createRef();
  }
  state = {
    startDate: new Date()
  };


  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleSubmit = (values, actions) => {
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
        actions.setSubmitting(false);
        actions.resetForm();
        this.imageRef.current.value = ""
        this.imageShowRef.current.setAttribute("src", "")
        this.props.showSuccess("Succesfully add Event")
      })
      .catch((err) => {
        window.alert(err.response.data.message)
      });
  };

  handleImageChange = (event) => {
    const inputFile = event.currentTarget;
    if (inputFile.files && inputFile.files[0]) {
      var reader = new FileReader();

      reader.onload = (event) => {
        this.imageShowRef.current.setAttribute("src", event.target.result);
      };
      reader.readAsDataURL(inputFile.files[0]);
    }
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
        render={(formProps) => {
          return (
            <div className="mainEvent">
              <Navbars />
              <h2 className="text-center pt-5 titleCategory">Create Event</h2>
              <Form className="formCreate justify-content-center align-items-center">
                <Container>
                  <Row className="justify-content-md-center ">
                    <Card className="createEventCard containerCreate">
                      <Card.Body>
                        <Col>
                          <label className="subLabel pb-2">Event Info</label>
                          <Field
                            type="text"
                            placeholder="Title"
                            className="form-control inputText btn-block mb-2"
                            name="title"
                            required
                          />
                          <p className="smallCreate">Your Event Title Name.</p>
                          <ErrorMessage name="title" />
                        </Col>

                        <Row className="pl-3 pt-2 pr-3">
                          <Col md={5}>
                            <Field
                              as="select"
                              type="text"
                              className="form-control inputText mb-2"
                              name="category"
                              required
                            >
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
                              <option>Others</option>
                            </Field>
                            <p className="smallCreate">Your Event Category.</p>
                          </Col>
                          <Col md={7}>
                            <Field
                              type="number"
                              className="form-control inputText"
                              placeholder="Max People"
                              name="limitPeople"
                              required
                            />
                            <p className="smallCreate1">
                              Limit people for your event.
                            </p>
                          </Col>
                        </Row>

                        <Row className="pl-3 pt-2 pr-3 orgRow">
                          <Col md={6}>
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="organizerName"
                              placeholder="Organizer Name"
                              required
                            />
                            <p className="smallCreate1">Organizer Name.</p>
                          </Col>
                          <Col md={6}>
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="responsibleName"
                              placeholder="Responsible Name"
                              required
                            />
                            <p className="smallCreate1">
                              Who is responsible for your event.
                            </p>
                          </Col>
                        </Row>

                        <Row className="pl-3 pt-3">
                          <Col md={5}>
                            <Field
                              type="text"
                              as="textarea"
                              rows="3"
                              name="description"
                              className="form-control inputText descText formLength"
                              style={{ width: "35rem" }}
                              placeholder="Description"
                              required
                            />
                            <p className="smallCreate1">
                              Description for your event.
                            </p>
                          </Col>
                        </Row>

                        <Row className="pl-3 pt-3">
                          <Col xs={8}>
                            <Field
                              type="text"
                              className="form-control inputText"
                              name="location"
                              placeholder="Venue Location"
                              required
                            />
                            <p className="smallCreate1">Your event location.</p>
                          </Col>
                        </Row>

                        <Row className="pl-3 pt-3">
                          <Col md={12}>
                            <Field
                              type="time"
                              className="form-control inputText timeBox"
                              name="time"
                              colon=":"
                              required
                            />
                            <p className="smallCreate1">
                              What time is your event (00:00 PM/AM).
                            </p>
                          </Col>
                        </Row>

                        <Row className="pl-0 pt-3 pr-3 orgRow">
                          <Col md={6}>
                            <div className="input-group-prepend pl-3">
                              <div className="input-group-text inputPrepend">
                                $
                              </div>
                              <Field
                                type="number"
                                className="form-control inputText"
                                name="price"
                                placeholder="Price"
                                required
                              />
                            </div>
                            <p className="smallCreate2">
                              How much is your event?
                            </p>
                          </Col>
                          <Col md={6}>
                            <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                              minDate={new Date()}
                              placeholderText="Select a day"
                              name="date"
                              className="form-control inputText ml-3 mt-3"
                              required
                            />
                            <p className="smallCreate1 ml-3">
                              When is your event held?
                            </p>
                          </Col>
                        </Row>

                        <Row className="pl-3 pt-3">
                          <Col md={8}>
                            <input
                              type="file"
                              className="form-control inputText descText formLength"
                              name="imageEvent"
                              style={{ width: "35rem" }}
                              ref={this.imageRef}
                              onChange={this.handleImageChange}
                              required
                            />
                            <p className="smallCreate1">
                              Image for your event.
                            </p>
                            <img
                              src="#"
                              alt=""
                              ref={this.imageShowRef}
                              className="imageShow"
                              required
                            />
                          </Col>
                        </Row>

                        <Row className="pl-3 mb-4">
                          <Col as={Col} md={12}>
                            <Field
                              name="detail"
                              as="textarea"
                              rows="4"
                              className="form-control inputText descText formLength"
                              style={{ width: "35rem" }}
                              placeholder="Detail"
                              required
                            />
                            <p className="smallCreate1">Your event detail.</p>
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
const mapDispatchToProps = { showSuccess };

export default connect(null, mapDispatchToProps)(EventCreate);
