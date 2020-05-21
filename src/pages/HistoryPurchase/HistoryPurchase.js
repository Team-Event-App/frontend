import React from "react";
import "./HistoryPurchase.css";
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
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Event1 from "../../image/color.jpeg";
import Event2 from "../../image/shawn.png";
import Event3 from "../../image/beer.jpeg";

import "./HistoryPurchase.css";

const HistoryPurchase = () => {
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
						<h2 className="text-center">History Purchase</h2>
						<div className="underlineHistory mb-5 mx-auto"></div>
					</Col>
				</Row>
				<Row>
					<Button
						variant="primary"
						className="ml-auto mb-2 invoiceButton"
						onClick={() => setModalShow(true)}
					>
						Pay Booking
					</Button>
					<MyVerticallyCenteredModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</Row>
				<Table responsive>
					<thead>
						<tr>
							<th>No</th>
							<th>Title</th>
							<th>Date</th>
							<th>Price</th>
							<th>Location</th>
							<th>Images</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Making the Most of Two-Colour Counters</td>
							<td>2020-05-25</td>
							<td>Rp.25000</td>
							<td>Zoom</td>
							<td>
								<img src={Event1} className="imageTable" alt="event" />
							</td>
							<td>
								<Button variant="primary" className="invoiceButton">
									Invoice
								</Button>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Shawn Mendes The Virtual Tour</td>
							<td>Sat, May 16, 2020 </td>
							<td>Free</td>
							<td>Online Live</td>
							<td>
								<img src={Event2} className="imageTable" alt="event" />
							</td>
							<td>
								<Button variant="primary" className="invoiceButton">
									Invoice
								</Button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>The Virtual Beer Festival</td>
							<td>2020-05-23</td>
							<td>45.000</td>
							<td>Online</td>
							<td>
								<img src={Event3} className="imageTable" alt="event" />
							</td>
							<td>
								<Button variant="primary" className="invoiceButton">
									Invoice
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</Container>
			<Footer />
		</div>
	);
};

export default HistoryPurchase;
