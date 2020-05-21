import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import jwt from "jwt-decode";

import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Detail.css";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			// show={props.modalShow}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Booking Form
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<input
					type="text"
					placeholder="Nama"
					className="login-input"
					name="name"
					id="name"
				/>
				<input
					type="number"
					placeholder="Quantity"
					className="login-input"
					name="quantity"
					id="quantity"
				/>

				<input
					type="number"
					placeholder="Total"
					className="login-input"
					name="total"
					id="total"
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

const Detail = () => {
	const history = useHistory();
	const [modalShow, setModalShow] = React.useState(false);
	const { id } = useParams();

	const [data, setData] = useState([]);

	useEffect(() => {
		const URL = `https://api.indrakawasan.com/event/show/${id}`;

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

	const bookingClick = (props) => {
		const token = localStorage.getItem("access-token");
		if (!token) {
			history.replace("/login");
		} else {
			const jwtdecode = jwt(token);
			console.log(jwtdecode);
			setModalShow(props);
		}
	};

	const showDetail = data.map((item, index) => {
		const URL = "https://api.indrakawasan.com/";

		return (
			<Card
				border="primary"
				key={index}
				className="mx-auto mt-4"
				style={{ width: "70rem" }}
			>
				<Card.Header>
					<Row>
						<Col md={9} sm={12}>
							<img
								src={`${URL}${item.imageEvent}`}
								alt="imageEvent"
								style={{ width: "50rem", height: "300px" }}
								className="detailCardImage"
							/>
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
						<Col md={1}>
							<i className="fas fa-share-alt"></i>
						</Col>
						<Col md={1}>
							<i className="far fa-bookmark"></i>
						</Col>
						<Col md={{ span: 3, offset: 7 }}>
							<Button
								block
								variant="outline-danger"
								// onClick={() => setModalShow(true)}
								onClick={() => bookingClick(true)}
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

							<Col md={3}>
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

								{/* <Card.Text>
                  <span style={{ color: "red" }}>Organizer by </span>{" "}
                  {item.organizerName}
                </Card.Text> */}
								<Card.Text>
									<span style={{ color: "red" }}>Responsible by </span>{" "}
									{item.responsibleName}
								</Card.Text>
							</Col>
						</Row>

						<Row
							className="mt-5 ml-1 bg-light"
							style={{ borderRadius: "20rem" }}
						>
							<Col md={{ offset: 2, span: 4 }}>
								<h4>Share this Event</h4>
							</Col>
							<Col md={1}>
								<i className="fab fa-facebook-square fa-2x"></i>
							</Col>
							<Col md={1}>
								<i className="fab fa-whatsapp fa-2x"></i>
							</Col>
							<Col md={1}>
								<i className="fas fa-envelope fa-2x"></i>
							</Col>
							<Col md={1}>
								<i className="far fa-copy fa-2x"></i>
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
			<Container className="mt-5 pt-5 mb-5">
				<Row>
					<Col>{showDetail}</Col>
				</Row>
				<MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</Container>
			<Footer />
		</div>
	);
};

export default Detail;
