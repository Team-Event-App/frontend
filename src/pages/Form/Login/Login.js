import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Login.css";
import { connect } from "react-redux";
import { login } from "../../../actions/loginActions";

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
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    props.login(data);
    history.push("/login");
  };

  return (
    <div>
      <Container className="registerMainContainer">
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
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="login-input"
                      name="password"
                      id="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                    <a href="/#">Forgot your password?</a>
                    <button>Sign In</button>
                  </form>
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
                      <p>Don't have an account?</p>
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
    </div>
  );
};
const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
