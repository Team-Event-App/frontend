import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";

import axios from "axios";
import jwt from "jwt-decode";

function HistoryBooking() {
	const [data, setData] = useState([]);
	const token = localStorage.getItem("access-token");
	const jwtdecode = jwt(token);
	const userName = jwtdecode.fullname;

	useEffect(() => {
		const URL = `https://api.indrakawasan.com/booking/getName/${userName}`;

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
		return (
			<tr key={index}>
				<td>{index + 1}</td>
				<td>dari backend</td>
				<td>{item.quantity}</td>
				<td>{item.total}</td>
			</tr>
		);
	});

	return (
		<div>
			<Row>
				<Col>
					<h2 className="text-center mt-5">History Purchase</h2>
					<div className="underlineHistory mb-5 mx-auto"></div>
				</Col>
			</Row>
			<Table responsive className="mb-5">
				<thead>
					<tr>
						<th>No</th>
						<th>Event Title</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>{showHistoryBooking}</tbody>
			</Table>
		</div>
	);
}

export default HistoryBooking;
