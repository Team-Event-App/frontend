import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid className="mt-5 pt-5 mb-5">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              password: "",
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
                return errors;
              }
            }}
            onSubmit={this.handleSubmit}
            render={() => {
              return (
                <Container>
                  <Row className="justify-content-center">
                    <Col md={6}>
                      <Card className="p-5 mt-5">
                        <img src="{}" alt="Logo" />
                        <hr />
                        <Form>
                          <div className="form-group">
                            Full Name
                            <Field
                              type="text"
                              name="fullName"
                              placeholder="Enter your Name"
                              className="form-control"
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
                            />
                            <ErrorMessage name="email" />
                          </div>
                          <div className="form-group">
                            Phone Number
                            <Field
                              type="number"
                              name="phone"
                              placeholder="Your Phone number"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            Password
                            <Field
                              type="password"
                              name="password"
                              placeholder="Enter your Password"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            Message
                            <Field
                              name="message"
                              as="textarea"
                              rows="4"
                              className="form-control"
                              placeholder="Send your Message Here"
                            />
                          </div>

                          <Button variant="outline-danger" block type="submit">
                            Send
                          </Button>
                        </Form>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              );
            }}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Contact;
