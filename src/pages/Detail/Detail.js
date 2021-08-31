import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwt from "jwt-decode";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	Modal,
	InputGroup,
	FormControl,
	Tooltip,
	OverlayTrigger
} from "react-bootstrap";
import { connect } from 'react-redux'
import { showSuccess } from './../../actions/modalActions'

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Detail.css";

// const url = `${process.env.REACT_APP_API_URL}`;

function MyVerticallyCenteredModal(props) {
	const { id } = useParams();
	const token = localStorage.getItem("access-token");
	let users = "";
	if (token) {
		users = jwt(token).fullname;
	}
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		const value = {
			eventId: id,
			name: users,
			quantity: data.quantity,
			total: data.total,
			eventTitle: props.data && props.data.title,
		};


		axios
			.post(`http://api.mentorinaja.com:8000/booking/create/`, value, {
				headers: {
					"access-token": localStorage.getItem("access-token"),
				},
			})
			.then((res) => {
				props.showSuccess("Successful Booking")
				props.onHide(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const [data, setData] = useState({
		name: users,
		quantity: 1,
		eventTitle: props.data && props.data.title,
	});

	const onChange = (event) => {
		const name = event.currentTarget.name;
		const value = event.currentTarget.value;
		if (value <= 0) {
			return;
		}
		setData({ ...data, [name]: value });
	};

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" name="eventTitle">
					<h5>{props.data && props.data.title}</h5>
				</Modal.Title>
			</Modal.Header>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Modal.Body>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text>$</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl value={props.data && props.data.price} disabled />
						<InputGroup.Append>
							<InputGroup.Text>.00</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="basic-addon3">Quantity</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							type="number"
							aria-describedby="basic-addon3"
							name="quantity"
							id="quantities"
							ref={register({ required: true })}
							value={data.quantity}
							onChange={onChange}
						/>
						{errors.quantity && <span>This field is required</span>}
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text>Total Price</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							name="total"
							ref={register({ required: true })}
							value={(props.data && props.data.price) * data.quantity}
						/>
						<InputGroup.Append>
							<InputGroup.Text>.00</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-primary" type="submit">
						Check Out
					</Button>
					<Button variant="outline-danger" onClick={props.onHide}>
						Close
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	);
}

const Detail = (props) => {
	const history = useHistory();
	const [modalShow, setModalShow] = React.useState(false);
	const { id } = useParams();

	const [data, setData] = useState([]);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	useEffect(() => {
		const URL = `http://api.mentorinaja.com:8000/event/show/${id}`;

		axios
			.get(URL)
			.then((res) => {
				const data = res.data;
				setData(data);
			})
			.catch((err) => {
				throw err;
			});
	}, [id]);

	const bookingClick = (isShow, data) => {
		const token = localStorage.getItem("access-token");
		if (!token) {
			history.replace("/login");
		} else {
			setModalShow({ isShow, data });
		}
	};

	const showDetail = data.map((item, index) => {
		const URL = `http://api.mentorinaja.com:8000/`;

		return (
			<Card
				border="primary"
				key={index}
				className="mx-auto mt-4 cardDetail"
			>
				<Card.Header>
					<Row className="rowCard">
						<Col md={9} sm={12}>
							<>
								<OverlayTrigger
									key='bottom'
									placement='bottom'
									overlay={
										<Tooltip>
											Click Here to Preview
         							    </Tooltip>
									}
								>
									<div onClick={handleShow}>
										<img
											src={`${URL}${item.imageEvent}`}
											alt="imageEvent"
											className="detailCardImage"
										/>
									</div>
								</OverlayTrigger>

								<Modal show={show} onHide={handleClose} centered>
									<img
										src={`${URL}${item.imageEvent}`}
										alt="imageEvent"
										className="imagePreview"
									/>
								</Modal>
							</>
						</Col>

						<Col md={3} sm={12} className="mt-5">
							<Card.Title>
								<b>{item.title}</b>
							</Card.Title>
							<Card.Title>{item.category}</Card.Title>
							<div className="mt-5">Price : ${item.price}</div>
						</Col>
					</Row>
					<div className="mt-2" style={{ borderTop: "1px solid black" }}></div>

					<Row className="mt-3">

						<Col md={{ span: 3, offset: 9 }}>
							<Button
								block
								variant="outline-danger"
								onClick={() => bookingClick(true, item)}
							>
								Buy Ticket
							</Button>
						</Col>
					</Row>
				</Card.Header>

				<Card.Body>
					<Container>
						<Row>
							<Col md={9}>
								<Card.Title>
									<b>{item.title}</b>
								</Card.Title>
								<Card.Title>{item.description}</Card.Title>
								<Card.Text className="text-justify mt-4">
									{item.detail}
								</Card.Text>
							</Col>

							<Col md={3} className="mb-5 pb-3">
								<h5 className="mb-4">Date And Time</h5>
								<Card.Text>
									<i className="far fa-calendar-alt mr-2"></i>
									{item.date}
								</Card.Text>
								<Card.Text>
									<i className="fas fa-clock mr-2"></i>
									{item.time}
								</Card.Text>

								<h5 className="mt-4">Location</h5>
								<Card.Text className="mt-0">
									<i className="fas fa-map-marker-alt mr-2"></i>
									{item.location}
								</Card.Text>

								<Card.Text>
									<span style={{ color: "red" }}>Organizer by </span>{" "}
									{item.organizerName}
								</Card.Text>

							</Col>
						</Row>
					</Container>
				</Card.Body>
			</Card>
		);
	});

	return (
		<div>
			<Navbar />
			<Container className="mt-5 pt-5 mb-5 containerCard">
				<Row>
					<Col>{showDetail}</Col>
				</Row>
				<MyVerticallyCenteredModal
					data={modalShow.data}
					show={modalShow.isShow}
					onHide={() => setModalShow({ isShow: false })}
					showSuccess={props.showSuccess}
				/>
			</Container>
			<Footer />
		</div>
	);
};

const mapDispatchToProps = { showSuccess };

export default connect(null, mapDispatchToProps)(Detail);
