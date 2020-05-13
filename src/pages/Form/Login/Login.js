import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Login.css";
import { connect } from "react-redux";

const Login = (props) => {
  const [data,setData] =useState({
    email:'',
    password:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <Container>
      <Row>
        <Col>
          <div className="main-login ">
            <div className="container-login mx-auto">
              <div className="form-container sign-in-container">
                <form onSubmit={handleSubmit} className="login-form">
                  <h1>Sign in</h1>
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
                    type="email"
                    placeholder="Email"
                    className="login-input"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={(e) => setData(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={(e) => setData(e.target.value)}
                  />
                  <a href="/#">Forgot your password?</a>
                  <button>Sign In</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <button className="ghost" id="signIn">
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>

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


export default Login;
