import React, { useState, useEffect } from "react";
import "./HistoryEvent.css";
import {
	Table,
	Container,
	Form,
	FormControl,
	Button,
	Row,
	Col,
	Modal,
} from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";

import jwt from "jwt-decode";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HistoryBooking from "./HistoryBooking";

import "./HistoryEvent.css";

const HistoryEvent = () => {
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
						onSubmit={async (values) => {
							let formData = new FormData();

							formData.set("sender", values.sender);
							formData.set("totalAmount", values.totalAmount);
							formData.append("imageProof", values.imageProof);

							const res = await axios(
								"https://api.indrakawasan.com/payment/create",
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
									onChange={props.handleChange}
									value={props.values.sender}
								/>
								<small className="form-text text-muted">
									Make sure name is match in proof image.
								</small>
								<label className="mt-3">Total Amount</label>
								<div className="input-group-prepend">
									<div className="input-group-text">Rp.</div>

									<Form.Control
										type="number"
										className="form-control"
										name="totalAmount"
										onChange={props.handleChange}
										value={props.values.totalAmount}
									/>
								</div>
								<small className="form-text text-muted">
									Amount total payment.
								</small>
								<label className="mt-3">Image</label>
								<Form.Control
									type="file"
									className="form-control"
									name="imageProof"
									onChange={(event) => {
										props.setFieldValue(
											"imageProof",
											event.currentTarget.files[0]
										);
									}}
								/>
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
	const idUser = jwtdecode.id;

	useEffect(() => {
		const URL = `https://api.indrakawasan.com/event/getByUserId/${idUser}`;

		axios
			.get(URL)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const showHistory = data.map((item, index) => {
		return (
			<tr key={index}>
				<td>{index + 1}</td>
				<td>{item.id}</td>
				<td>{item.title}</td>
				<td>{item.date}</td>
				<td>{item.price}</td>
				<td>{item.location}</td>

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
	});

	return (
		<div>
			<Navbar />
			<Container className="mt-5 pt-5 mb-4">
				<Row>
					<Form inline className="mx-auto mt-5 mb-5">
						<FormControl
							type="text"
							placeholder="Search Purchase"
							className="mainInput "
						/>
						<Button
							variant="outline-success"
							className="buttonSearch mainSearch"
						>
							<i className="fas fa-search"></i>
						</Button>
					</Form>
				</Row>
				<Row>
					<Col>
						<h2 className="text-center">History Event</h2>
						<div className="underlineHistory mb-5 mx-auto"></div>
					</Col>
				</Row>

				<Row>
					<MyVerticallyCenteredModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</Row>
				<Table responsive>
					<thead>
						<tr>
							<th>No</th>
							<th>Event Id</th>
							<th>Title</th>
							<th>Date</th>
							<th>Price</th>
							<th>Location</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>{showHistory}</tbody>
				</Table>

				<HistoryBooking />
			</Container>
			<Footer />
		</div>
	);
};

export default HistoryEvent;
