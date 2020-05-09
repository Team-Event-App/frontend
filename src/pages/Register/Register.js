import React from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./Register.css";
import {Formik} from 'formik';
import {Form} from 'react-bootstrap';
// import * as Yup from 'yup';

const Register = () => {
    const history = useHistory();
  return (
    <div className="main-register">
      <div class="container-register">
        <div class="container" id="container">
          <div class="form-container sign-in-container">
              <Formik
              initialValues={{
                username:"",
                fullname:"",
                phone:"",
                email:"",
                password:"",
                imageUrl:""
              }
            }
              onSubmit={(values,actions)=>{
                  axios({
                      method:"POST",
                      url:"http://localhost:8000/user/register",
                      data:values
                  });
                  setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                      history.push("/login");
                  })
              }}
              >
                  {props => (
                                  <form onSubmit={props.handleSubmit} className="register-form">
                                  <h1>Register</h1>
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
                                  <input type="text" placeholder="User Name" className="register-input" 
                                    name="username"
                                    id="username"
                                    value={props.values.username}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                  />
                                  <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="register-input"
                                    name="fullname"
                                    id="fullname"
                                    value={props.values.fullname}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                  />
                                                                    <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="register-input"
                                    name="phone"
                                    id="phone"
                                    value={props.values.phone}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                  />
                                                                    <input
                                    type="email"
                                    placeholder="Email"
                                    className="register-input"
                                    name="email"
                                    id="email"
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                  />
                                                                    <input
                                    type="text"
                                    placeholder="Password"
                                    className="register-input"
                                    name="password"
                                    id="password"
                                    value={props.values.password}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                  />
                                <Form.File id="custom-file" label="Upload Image" custom 
                                    name="imageUrl"
                                    value={props.values.imageUrl}
                                />
                                  <button type="submit" >Sign Up</button>
                                </form>
                  )}
            </Formik>
          </div>
          <div class="overlay-container">
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp">
                  Sign In
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
