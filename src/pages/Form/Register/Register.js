import React from "react";
import axios from "axios";
import { Formik, Form, ErrorMessage } from "formik";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import "./Register.css";

const Register = () => {
	const history = useHistory();

	return (
		<Container>
			<div class="sidebar">
				<Link to="/">
					<i class="fa fa-fw fa-home"></i>
				</Link>
			</div>
			<Row>
				<Col>
					<div className="main-register">
						<div className="container-register mx-auto">
							<div className="form-container sign-in-container">
								<Formik
									initialValues={{
										username: "",
										fullname: "",
										phone: "",
										email: "",
										password: "",
									}}
									validate={(values) => {
										let errors = {};
										if (!values.password) {
											errors.password = (
												<small className="form-text text-danger">
													Password is required
												</small>
											);
											return errors;
										}
									}}
									onSubmit={(values, actions) => {
										console.log(values);

										axios("https://api.indrakawasan.com/user/register", {
											method: "POST",
											data: values,
										})
											.then((res) => {
												alert("Register Success!");
												actions.resetForm(true);
												history.push("/login");
											})
											.catch((err) => {
												console.log(err);
											});
									}}
								>
									{(props) => (
										<Form
											className="register-form"
											onSubmit={props.handleSubmit}
										>
											<h1 className="mb-4">Register</h1>

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
											<div className="input-group-prepend mainPrependPassword">
												<input
													type="password"
													placeholder="Password"
													className="register-input"
													name="password"
													id="password-field"
													onChange={props.handleChange}
													onBlur={props.handleBlur}
													value={props.values.password}
												/>
												<div className="input-group-text passwordPrepend">
													<i className="fa fa-eye password-icon"></i>
												</div>
											</div>
											<span>Password at least 8 Characters</span>
											<ErrorMessage name="password" />
											<Button variant="danger" type="submit" className="mt-3">
												Sign Up
											</Button>
										</Form>
									)}
								</Formik>
							</div>
							<div className="overlay-container-regis">
								<div className="overlay">
									<div className="overlay-panel overlay-right">
										<h1>Hello, Friend!</h1>
										<p>Enter your personal details and start journey with us</p>
										<p>Have an account?</p>
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
				</Col>
			</Row>
		</Container>
	);
};

export default Register;
