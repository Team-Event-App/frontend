import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Field } from "formik";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import * as Yup from 'yup';

import "./Register.css";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-register">
      <div className="container-register">
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <Formik
              initialValues={{
                username: "",
                fullname: "",
                phone: "",
                email: "",
                password: "",
                imageUrl: "",
              }}
              onSubmit={(values, actions) => {
                axios({
                  method: "POST",
                  url: "http://localhost:8000/user/register",
                  data: values,
                });
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                  actions.resetForm();
                  history.push("/login");
                });
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit} className="register-form">
                  <h1>Register</h1>
                  <div className="social-container">
                    <a href="/#" className="social">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/#" className="social">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="/#" className="social">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <span>or use your account</span>
                  <Field
                    type="text"
                    placeholder="User Name"
                    className="register-input"
                    name="username"
                    id="username"
                    value={props.values.username}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  <Field
                    type="text"
                    placeholder="Full Name"
                    className="register-input"
                    name="fullname"
                    id="fullname"
                    value={props.values.fullname}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  <Field
                    type="text"
                    placeholder="Phone Number"
                    className="register-input"
                    name="phone"
                    id="phone"
                    value={props.values.phone}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  <Field
                    type="email"
                    placeholder="Email"
                    className="register-input"
                    name="email"
                    id="email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  <Field
                    type="text"
                    placeholder="Password"
                    className="register-input"
                    name="password"
                    id="password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  <Form.File
                    id="custom-file"
                    label="Upload Image"
                    custom
                    name="imageUrl"
                    value={props.values.imageUrl}
                  />
                  <Button variant="danger" type="submit" className="mt-3">
                    Sign Up
                  </Button>
                  <Link>
                    <Button variant="danger" id="signUp" type="reset">
                      Reset
                    </Button>
                  </Link>
                </form>
              )}
            </Formik>
          </div>
          <div className="overlay-container">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link to="/login">
                <Button variant="danger">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
