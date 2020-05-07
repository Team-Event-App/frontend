import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  return (
    <div className="body ">
      <div className="main mx-auto">
        <div className="container" id="container">
          {/* <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <Link to="#" className="social">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-google-plus-g" />
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Full Name" />
              <input type="number" placeholder="Phone Number" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div> */}

          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="mb-3 mt-4 input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
              </div>
              <span className="mt-3">or Login with</span>
              <div className="social-container">
                <Link to="#" className="social">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-google-plus-g" />
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
              <Link to="#">Forgot your password?</Link>

              <button>Sign In</button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              {/* <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn">
                  Sign In
                </button>
              </div> */}

              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
