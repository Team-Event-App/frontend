import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

import  { connect } from 'react-redux'
import { showSuccess } from './../../actions/modalActions'

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Logo from "../../image/logo.png";

import "./Contact.css";

class Contact extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container mt-5 pt-5 mb-5">
					<Formik
						initialValues={{
							username: "",
							_replyto: "",
							phone: "",
							message: "",
						}}
						validate={(values) => {
							let errors = {};
							if (!values.username && !values._replyto) {
								errors.username = (
									<small className="form-text text-danger">
										Username is required
									</small>
								);
								errors._replyto = (
									<small className="form-text text-danger">
										Email Address is required
									</small>
								);
								errors.phone = (
									<small className="form-text text-danger">
										Phone number is required
									</small>
								);
								errors.message = (
									<small className="form-text text-danger">
										Write your message here.
									</small>
								);
								return errors;
							}
						}}
						onSubmit={(values, actions) => {

							axios("https://api.indrakawasan.com/contact/create", {
								method: "POST",
								data: values,
							})
								.then((res) => {
									axios
										.post("https://formspree.io/xvowaovj", values
										)
									this.props.showSuccess("Your Message Successfully sent!")
									actions.resetForm(true);
								})
								.catch((err) => {
									alert("Server Error , try again later.");
								});
						}}
						render={(props) => {
							return (
								<div className="container-contact">
									<Row className="justify-content-center">
										<Col md={6}>
											<Card className="p-5 mt-5 contactCard">
												<img src={Logo} alt="Logo" className="logoImage" />
												<hr />
												<Form onSubmit={props.handleSubmit} action="https://formspree.io/xvowaovj" method="POST">
													<div className="form-group">
														Username
														<Field
															type="text"
															name="username"
															placeholder="Enter your Name"
															className="form-control"
															onChange={props.handleChange}
															onBlur={props.handleBlur}
															value={props.values.username}
														/>
														<ErrorMessage name="username" />
													</div>
													<div className="form-group">
														Email Address
														<Field
															type="email"
															name="_replyto"
															placeholder="Enter your Email Address"
															className="form-control"
															onChange={props.handleChange}
															onBlur={props.handleBlur}
															value={props.values._replyto}
														/>
														<ErrorMessage name="_replyto" />
													</div>
													<div className="form-group">
														Phone Number
														<Field
															type="number"
															name="phone"
															placeholder="Your Phone number"
															className="form-control"
															onChange={props.handleChange}
															onBlur={props.handleBlur}
															value={props.values.phone}
														/>
														<ErrorMessage name="phone" />
													</div>
													<div className="form-group">
														Message
														<Field
															name="message"
															as="textarea"
															rows="4"
															className="form-control"
															placeholder="Send your Message Here"
															onChange={props.handleChange}
															onBlur={props.handleBlur}
															value={props.values.message}
														/>
														<ErrorMessage name="message" />
													</div>

													<Button variant="outline-danger" block type="submit">
														Send
													</Button>
												</Form>
											</Card>
										</Col>
									</Row>
								</div>
							);
						}}
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapDispatchToProps = { showSuccess }

export default connect(null,mapDispatchToProps)(Contact);
