import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Modal, Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import jwt from "jwt-decode";
import * as Yup from "yup";

// const url = `${process.env.REACT_APP_API_URL}`;

function HistoryBooking() {
	const [modalShow, setModalShow] = React.useState(false);
	function MyVerticallyCenteredModal(props) {
		return (
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Confirm Payment
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Formik
						initialValues={{
							sender: "",
							totalAmount: "",
							imageProof: null,
						}}
						validationSchema={Yup.object().shape({
							sender: Yup.string().required("Sender Name is required"),
							totalAmount: Yup.string().required(
								"Please fill out total amount your ticket price."
							),
						})}
						onSubmit={async (values) => {
							let formData = new FormData();

							formData.set("sender", values.sender);
							formData.set("totalAmount", values.totalAmount);
							formData.append("imageProof", values.imageProof);

							const res = await axios(
								`http://api.evenity.asia/payment/create`,
								{
									method: "POST",
									data: formData,
									headers: {
										"access-token": localStorage.getItem("access-token"),
									},
								}
							);

							console.log(res);
							alert("Success sending payment.");
							console.log(formData.get("sender"));
							console.log(formData.get("totalAmount"));
							console.log(formData.get("imageProof"));
						}}
					>
						{(props) => (
							<Form onSubmit={props.handleSubmit}>
								<label className="mt-3">Sender Name</label>
								<Form.Control
									type="text"
									aria-describedby="basic-addon3"
									name="sender"
									id="sender"
									onBlur={props.handleBlur}
									onChange={props.handleChange}
									value={props.values.sender}
								/>
								<p class="validateString">
									<ErrorMessage name="sender" />
								</p>
								<small className="form-text text-muted">
									Make sure name is match in proof image.
								</small>

								<label className="mt-3">Total Amount</label>
								<div className="input-group-prepend">
									{/* <div className="input-group-text">Rp.</div> */}

									<Form.Control
										type="number"
										className="form-control"
										name="totalAmount"
										id="totalAmount"
										onBlur={props.handleBlur}
										onChange={props.handleChange}
										value={props.values.totalAmount}
									/>
								</div>
								<p class="validateString">
									<ErrorMessage name="totalAmount" />
								</p>
								<small className="form-text text-muted">
									Amount total payment.
								</small>

								<label className="mt-3">Image</label>
								<Form.Control
									type="file"
									className="form-control"
									name="imageProof"
									id="imageProof"
									onBlur={props.handleBlur}
									onChange={(event) => {
										props.setFieldValue(
											"imageProof",
											event.currentTarget.files[0]
										);
									}}
								/>
								<p class="validateString">
									<ErrorMessage name="imageProof" />
								</p>
								<small className="form-text text-muted">
									Image proof for payment.
								</small>

								<Modal.Footer className="mt-4">
									<Button variant="primary" type="submit">
										Submit
									</Button>
									<Button onClick={props.onHide} variant="danger">
										Close
									</Button>
								</Modal.Footer>
							</Form>
						)}
					</Formik>
				</Modal.Body>
			</Modal>
		);
	}
	const [data, setData] = useState([]);
	const token = localStorage.getItem("access-token");
	const jwtdecode = jwt(token);
	const userName = jwtdecode.fullname;

	useEffect(() => {
		const URL = `http://api.evenity.asia/booking/getName/${userName}`;

		axios
			.get(URL, {
				headers: {
					"access-token": token,
				},
			})
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const showHistoryBooking = data.map((item, index) => {
		if (data) {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{item.eventTitle}</td>
					<td>{item.quantity}</td>
					<td>{item.total}</td>
					<td>
						<Button
							variant="primary"
							className="ml-auto mb-2 invoiceButton"
							onClick={() => setModalShow(true)}
						>
							Pay Booking
						</Button>
					</td>
				</tr>
			);
		} else {
			return (
				<tr>
					<td>Nothing</td>
				</tr>
			);
		}
	});

	return (
		<div>
			<Row>
				<Col>
					<h2 className="text-center mt-5">History Booking</h2>
					<div className="underlineHistory mb-5 mx-auto"></div>
				</Col>
			</Row>
			<Row>
				<MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</Row>
			<Table responsive className="mb-5">
				<thead>
					<tr>
						<th>No</th>
						<th>Event Title</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{showHistoryBooking}</tbody>
			</Table>
		</div>
	);
}

export default HistoryBooking;
