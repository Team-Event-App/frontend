import React, { Component } from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import { Formik } from "formik";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Register.css";

class Register extends Component {
  render() {
    return (
      <Container>
        <div class="sidebar">
          {/* <p>Home</p> */}
  <Link to="/"><i class="fa fa-fw fa-home"></i></Link>
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
                    onSubmit={(values, actions) => {
                      console.log(values);

                      axios("https://api.indrakawasan.com/user/register", {
                        method: "POST",
                        data: values,
                      })
                        .then((res) => {
                          alert("Register Success!");
                          actions.resetForm(true);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    {(props) => (
                      <form
                        className="register-form"
                        onSubmit={props.handleSubmit}
                      >
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
                        <input
                          type="password"
                          placeholder="Password"
                          className="register-input"
                          name="password"
                          id="password"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.password}
                        />

                        <Button variant="danger" type="submit" className="mt-3">
                          Sign Up
                        </Button>
                      </form>
                    )}
                  </Formik>
                </div>
                <div className="overlay-container-regis">
                  <div className="overlay">
                    <div className="overlay-panel overlay-right">
                      <h1>Hello, Friend!</h1>
                      <p>
                        Enter your personal details and start journey with us
                      </p>
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
  }
}

export default Register;