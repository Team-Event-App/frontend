import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import { Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import axios from "axios";

// import * as Yup from 'yup';

import "./Register.css";

class Register extends Component {
  render() {
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
                onSubmit={async  (values,actions) => {
                  let formData = new FormData();
                  formData.append("username", values.username);
                  formData.append("fullname", values.fullname);
                  formData.append("email", values.email);
                  formData.append("phone", values.phone);
                  formData.append("password", values.password);
                  formData.append("imageUrl",values.imageUrl);

                  const res = await axios(
                    "https://api.indrakawasan.com/user/register",
                    { method: "POST", body: formData,data:formData }
                  );
                  console.log(res);
                    alert("Register Success!");
                    console.log(formData.get("username"));
                    console.log(formData.get("fullname"));
                    console.log(formData.get("email"));
                    console.log(formData.get("phone"));
                    console.log(formData.get("password"));
                    console.log(formData.get("imageUrl"));
                }}
              >
                {props =>(
                                  <form className="register-form" onSubmit={props.handleSubmit}>
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
                                  <label>Optional</label>
                                  <input
                                    type="file"
                                    id="custom-file"
                                    label="Upload Image"
                                    className="register-input"
                                    custom
                                    name="imageUrl"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
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
  }
}

export default Register;
