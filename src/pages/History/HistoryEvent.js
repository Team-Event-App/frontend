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
} from "react-bootstrap";
import axios from "axios";

import jwt from "jwt-decode";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HistoryBooking from "./HistoryBooking";

import "./HistoryEvent.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const HistoryEvent = () => {
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
		if (data) {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{item.id}</td>
					<td>{item.title}</td>
					<td>{item.date}</td>
					<td>{item.price}</td>
					<td>{item.location}</td>
					{/* <td>
						<Button className="mr-2" variant="danger">Edit</Button>
						<Button variant="danger">Delete</Button>
					</td> */}
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
				<Table responsive>
					<thead>
						<tr>
							<th>No</th>
							<th>Event Id</th>
							<th>Title</th>
							<th>Date</th>
							<th>Price</th>
							<th>Location</th>
							{/* <th>Action</th> */}
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
