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
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { connect } from "react-redux";
import { login } from "../../actions/loginActions";
import "./Login.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const responseFacebook = (response) => {
    console.log(response);
  }
  const responseGoogle = (response) => {
    console.log(response);
  }
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
                      <div className="divSignText">
                      <h1 className="mb-4 signText">Sign in</h1>
                      </div>
                      <Row className="rowEmail">
                      <InputGroup>
                        <FormControl
                          type="email"
                          placeholder="Email"
                          className="login-input mb-3"
                          name="email"
                          id="email"
                          value={data.email}
                          onChange={handleChange}
                          required
                        ></FormControl>
                      </InputGroup>
                      </Row>
                      <Row className="rowPassword">
                      <InputGroup>
                        <FormControl
                          type={passwordShown ? "text" : "password"}
                          placeholder="Password"
                          className="login-input"
                          name="password"
                          id="password"
                          value={data.password}
                          onChange={handleChange}
                          required
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
                        <div>
                          <FacebookLogin
                          appId='288165879086784'
                          autoLoad={false}
                          fields="name,email,picture"
                          callback={responseFacebook}
                          />
                            Login with Facebook
                        </div>
                        <div>
                          <GoogleLogin
                          clientId='364245340189-hb6cniils09bc2oi73akr60knd49ht87.apps.googleusercontent.com'
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          buttonText="Login with Google"
                          className="googleButton"
                          />
                        </div>
                      </Row>
                      <NavLink to="/register" className="haveText2">Don't have an account yet ? Make one here</NavLink>
                      <button>Sign In</button>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="overlay-container overlay-container-login">
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
