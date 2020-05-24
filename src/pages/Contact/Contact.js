import React, { Component } from "react";
import { Row, Col, Card, Button ,Alert} from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Logo from "../../image/logo.png";

import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 pt-5 mb-5">
          <Formik
            initialValues={{
              fullname: "",
              email: "",
              phone: "",
              message: "",
            }}
            validate={(values) => {
              let errors = {};
              if (!values.fullName && !values.email) {
                errors.fullName = (
                  <small className="form-text text-danger">
                    Full Name is required
                  </small>
                );
                errors.email = (
                  <small className="form-text text-danger">
                    Email Address is required
                  </small>
                );
                errors.phone = (
                  <small className="form-text text-danger">
                    Phone number is required
                  </small>
                );
                errors.message = (
                  <small className="form-text text-danger">
                    Write your message here.
                  </small>
                );
                return errors;
              }
            }}
            onSubmit={(values, actions) => {
              console.log(values);

              axios("https://api.indrakawasan.com/contact/create", {
                method: "POST",
                data: values,
              })
                .then((res) => {
                  alert("Your Message Successfully sent!");
                  actions.resetForm(true);
                })
                .catch((err) => {
                  alert("Server Error , try again later.")
                });
            }}
            render={(props) => {
              return (
                <div className="container-contact">
                  <Row className="justify-content-center">
                    <Col md={6}>
                      <Card className="p-5 mt-5 contactCard">
                        <img src={Logo} alt="Logo" className="logoImage"/>
                        <hr />
                        <Form onSubmit={props.handleSubmit}>
                          <div className="form-group">
                            Full Name
                            <Field
                              type="text"
                              name="fullname"
                              placeholder="Enter your Name"
                              className="form-control"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.fullname}
                            />
                            <ErrorMessage name="fullName" />
                          </div>
                          <div className="form-group">
                            Email Address
                            <Field
                              type="email"
                              name="email"
                              placeholder="Enter your Email Address"
                              className="form-control"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.email}
                            />
                            <ErrorMessage name="email" />
                          </div>
                          <div className="form-group">
                            Phone Number
                            <Field
                              type="text"
                              name="phone"
                              placeholder="Your Phone number"
                              className="form-control"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.phone}
                            />
                            <ErrorMessage name="phone" />
                          </div>
                          <div className="form-group">
                            Message
                            <Field
                              name="message"
                              as="textarea"
                              rows="4"
                              className="form-control"
                              placeholder="Send your Message Here"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.message}
                            />
                            <ErrorMessage name="message" />
                          </div>

                          <Button variant="outline-danger" block type="submit">
                            Send
                          </Button>
                        </Form>
                      </Card>
                    </Col>
                  </Row>
                </div>
              );
            }}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
