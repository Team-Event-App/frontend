import React, { Component } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import serialize from "form-serialize";

import "./Register.css";

class Register extends Component {
handleSubmit = (e, actions) => {
const data = serialize(e.initialValues, { hash: true, empty: true });
console.log("data: ", data);

    axios
      .post("https://api.indrakawasan.com/user/register", data)
      .then((result) => {
        actions.setSubmitting(false);
        actions.resetForm();
        console.log(result);

        alert("Register Success!");
      });

};
render() {
return (
<Container>
<Row>
<Col>
<div className="main-register">
<div className="container-register mx-auto">
<div className="container" id="container">
<div className="form-container sign-in-container">
<Formik
initialValues={{
                        username: "",
                        fullname: "",
                        phone: "",
                        email: "",
                        password: "",
                      }}
onSubmit={this.handleSubmit}
render={(formProps) => (
<form
                          className="register-form"
                          onSubmit={formProps.handleSubmit}
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
                            onChange={formProps.handleChange}
                            onBlur={formProps.handleBlur}
                            value={formProps.values.username}
                          />
<input
                            type="text"
                            placeholder="Full Name"
                            className="register-input"
                            name="fullname"
                            id="fullname"
                            onChange={formProps.handleChange}
                            onBlur={formProps.handleBlur}
                            value={formProps.values.fullname}
                          />
<input
                            type="email"
                            placeholder="Email"
                            className="register-input"
                            name="email"
                            id="email"
                            onChange={formProps.handleChange}
                            onBlur={formProps.handleBlur}
                            value={formProps.values.email}
                          />
<input
                            type="text"
                            placeholder="Phone Number"
                            className="register-input"
                            name="phone"
                            id="phone"
                            onChange={formProps.handleChange}
                            onBlur={formProps.handleBlur}
                            value={formProps.values.phone}
                          />
<input
                            type="password"
                            placeholder="Password"
                            className="register-input"
                            name="password"
                            id="password"
                            onChange={formProps.handleChange}
                            onBlur={formProps.handleBlur}
                            value={formProps.values.password}
                          />

                          <Button
                            variant="danger"
                            type="submit"
                            disabled={formProps.isSubmitting}
                            className="mt-3"
                          >
                            Sign Up
                          </Button>
                        </form>
                      )}
                    />
                  </div>
                  <div className="overlay-container-regis">
                    <div className="overlay">
                      <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>
                          Enter your personal details and start journey with us
                        </p>
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
            </div>
          </Col>
        </Row>
      </Container>
    );

}
}

export default Register;
