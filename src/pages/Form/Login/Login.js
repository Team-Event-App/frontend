import React, { useState } from "react";
import { Formik, Form } from "formik";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../../../actions/loginActions";
import "./Login.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(data);
  };
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
          <div className="main-login ">
            <div className="container-login mx-auto">
              <div className="form-container sign-in-container">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}

                  onSubmit={handleSubmit}
                >
                  {(errors, touched) => (
                    <Form
                      onSubmit={handleSubmit}
                      className="login-form"
                      autoComplete="off"
                    >
                      <h1 className="mb-4">Sign in</h1>

                      <InputGroup>
                        <FormControl
                          type="email"
                          placeholder="Email"
                          className="login-input mb-3"
                          name="email"
                          id="email"
                          value={data.email}
                          onChange={handleChange}
                        ></FormControl>
                      </InputGroup>

                      <InputGroup>
                        <FormControl
                          type={passwordShown ? "text" : "password"}
                          placeholder="Password"
                          className="login-input"
                          name="password"
                          id="password"
                          value={data.password}
                          onChange={handleChange}
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

                      <NavLink to="/register">Forgot your password?</NavLink>
                      <button>Sign In</button>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <button className="ghost" id="signIn">
                      Sign In
                      </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your
                      personal info
                      </p>
                    <NavLink to="/register" style={{ color: "white" }}>
                      Don't have an account?
                      </NavLink>
                    <Link to="/register">
                      <Button variant="danger" className="ghost" id="signUp">
                        Sign Up
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

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
