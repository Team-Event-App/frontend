import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://api.indrakawasan.com/user/login",
      method: "POST",
      data: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        localStorage.setItem('token',res.data)
      
        history.push("/");
      })
      .catch((err) => {
        console.log("Login Failed.");
        history.push("/login");
      });
  };
  return (
    <div className="main-login">
      <div className="container-login">
        <div className="container" id="container">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
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
    </div>
  );
};

export default Login;
