import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import * as Yup from "yup";
import { connect } from 'react-redux'
import { showSuccess } from '../../../actions/modalActions'

import "./Register.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const Register = (props) => {
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <Container>
      <div className="sidebar">
        <Link to="/">
          <i className="fa fa-fw fa-home"></i>
        </Link>
      </div>
      <Row>
        <Col>
          <div className="main-register">
            <div className="container-register mx-auto">
              <div className="form-container sign-in-container">
                <Formik
                  initialValues={{
                    username: "",
                    fullname: "",
                    phone: "",
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object().shape({
                    username: Yup.string().required("username is required"),
                    fullname: Yup.string().required(
                      "Please fill out your name"
                    ),
                    phone: Yup.string().required("Phone number is required"),
                    email: Yup.string()
                      .email("Email is invalid")
                      .required("Email is required"),
                    password: Yup.string()
                      .min(8, "Password must be at least 8 characters")
                      .required("Password is required"),
                  })}
                  onSubmit={(values, actions) => {

                    axios(`https://api.indrakawasan.com/user/register`, {
                      method: "POST",
                      data: values,
                    })
                      .then((res) => {
                        props.showSuccess("Register Success!");
                        actions.resetForm(true);
                        history.push("/login");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  {(props, errors, touched) => (
                    <Form
                      className="register-form"
                      autoComplete="off"
                      onSubmit={props.handleSubmit}
                    >
                      <h1 className="mb-4">Register</h1>

                      <input
                        type="text"
                        placeholder="User Name"
                        className="register-input"
                        name="username"
                        id="username"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.username}
                      />
                      <p className="validateString">
                        <ErrorMessage name="username" />
                      </p>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="register-input"
                        name="fullname"
                        id="fullname"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.fullname}
                      />
                      <p className="validateString">
                        <ErrorMessage name="fullname" />
                      </p>
                      <input
                        type="email"
                        placeholder="Email"
                        className="register-input"
                        name="email"
                        id="email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                      />
                      <p className="validateString">
                        <ErrorMessage name="email" />
                      </p>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="register-input"
                        name="phone"
                        id="phone"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.phone}
                      />
                      <p className="validateString">
                        <ErrorMessage name="phone" />
                      </p>

                      <InputGroup>
                        <FormControl
                          type={passwordShown ? "text" : "password"}
                          placeholder="Password"
                          className="register-input"
                          name="password"
                          id="password-field"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.password}
                        />
                        <InputGroup.Append className="mt-2">
                          <div className="input-group-text passwordPrepend">
                            <i
                              className="fa fa-eye password-icon"
                              onClick={togglePasswordVisibility}
                            ></i>
                          </div>
                        </InputGroup.Append>
                      </InputGroup>

                      <p className="validateString">
                        <ErrorMessage name="password" />
                      </p>
                      <Button variant="danger" type="submit" className="mt-3">
                        Sign Up
                        </Button>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="overlay-container-regis">
                <div className="overlay">
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <p>Have an account?</p>
                    <Link to="/login">
                      <Button className="ghost" variant="outline-danger">
                        Sign In
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = {
  showSuccess
}

export default connect(null, mapDispatchToProps)(Register);
