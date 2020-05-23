import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwt from "jwt-decode";

import profile from "./../../image/profile.png";

const EditProfile = () => {
	const URL = "https://api.indrakawasan.com/";
	const token = localStorage.getItem("access-token");
	const jwtdecode = jwt(token);
	const userProfile = jwtdecode.id;
	const [data, setData] = useState({});
	useEffect(() => {
		const URL = `https://api.indrakawasan.com/user/show/${userProfile}`;
		axios
			.get(URL)
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		axios
			.put(`https://api.indrakawasan.com/user/edit/${userProfile}`, data, {
				headers: {
					"access-token": localStorage.getItem("access-token"),
				},
			})
			.then((res) => {
				console.log(res);
				alert("Your profile already changed");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Row className="mb-5 mt-5">
			<Col md={{ offset: 3, span: 6 }}>
				<Card>
					<Card.Img
						src={`${URL}${data.imageUrl}`}
						src={profile}
						className="mx-auto mb-2 mt-3"
						style={{ width: "10rem" }}
					/>
					<div className="d-flex ml-5 pl-5 mb-3 mt-3 justify-content-center">
						<input type="file" />
					</div>

					<Card.Body>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<Form.Group controlId="username">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="text"
									name="username"
									defaultValue={data.username}
									ref={register({ required: true })}
								/>
							</Form.Group>

							<Form.Group controlId="fullname">
								<Form.Label>Full Name</Form.Label>
								<Form.Control
									type="text"
									name="fullname"
									defaultValue={data.fullname}
									ref={register({ required: true })}
								/>
							</Form.Group>

							<Form.Group controlId="email">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="email"
									defaultValue={data.email}
									ref={register({ required: true })}
								/>
							</Form.Group>

							<Form.Group controlId="phone">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									type="number"
									name="phone"
									defaultValue={data.phone}
									ref={register({ required: true })}
								/>
							</Form.Group>
							<Button
								type="submit"
								variant="outline-danger"
								className="buttonProfile "
								block
							>
								Save
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default EditProfile;
