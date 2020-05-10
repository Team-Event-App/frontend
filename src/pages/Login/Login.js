import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./Login.css";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url:"http://localhost:8000/user/login",
      method:"POST",
      data:{
        email,
        password
      },
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(res => {
      localStorage.setItem("access-token",res.data);

      history.push("/")
    })
    .catch(err => {
      console.log("Login Failed.")
    })
  }
  return (
    <div className="main-login">
      <div class="container-login">
        <div class="container" id="container">
          <div class="form-container sign-in-container">
            <form onSubmit={handleSubmit} className="login-form">
              <h1>Sign in</h1>
              <div class="social-container">
                <a href="/#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="/#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" className="login-input" 
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
              <a href="/#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>
            Created with <i class="fa fa-heart"></i> by
            <a target="/#" href="https://florin-pop.com">
              Florin Pop
            </a>
            - Read how I created this and how you can join the challenge
            <a
              target="/#"
              href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
            >
              here
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
