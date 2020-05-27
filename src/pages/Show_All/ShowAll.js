import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardDeck,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./../Home/Main/Main.css";
import "./ShowAll.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const ShowAll = (props) => {
	const [data, setData] = useState([]);
	let [search, setSearch] = useState([]);

	const params = new URLSearchParams(props.location.search);
	// value search in here
	const searchQuery = params.get("search");

	useEffect(() => {
		console.log(searchQuery);
		const URL = `https://api.indrakawasan.com/event/show?search=${searchQuery}`;

		axios
			.get(URL)
			.then((res) => {
				const data = res.data;
				setData(data);
			})
			.catch((err) => {
				if (
					err &&
					err.response &&
					err.response.data &&
					err.response.data.message
				) {
					alert(err.response.data.message);
				} else {
					alert("Sorry we have server problem , Try again later.. ");
				}
			});
	}, []);

	const showAllEvent = data.map((item, index) => {
		const URL = `https://api.indrakawasan.com/`;
		return (
			<Col lg={3} md={6} sm={12} className="my-2 mt-5 pt-2 pl-0 pr-0">
				<CardDeck>
					<Card border="secondary" className=" main-card mr-5 " key={index}>
						<Card.Img
							variant="top"
							src={`${URL}${item.imageEvent}`}
							alt="imageEvent"
						/>
						<Card.Body className="mainBody">
							<Card.Text>{item.title}</Card.Text>
							<Card.Text>
								<FontAwesomeIcon icon={faCalendar} /> {item.date}
							</Card.Text>
							<Card.Text>
								<FontAwesomeIcon icon={faClock} /> {item.time}
							</Card.Text>
							<Card.Text>
								<i className="fas fa-map-marker-alt mr-2"></i>
								{item.location}
							</Card.Text>
							<Link
								to={`/event/${item.id}`}
								className="btn btn-outline-danger btn-block"
							>
								See More
							</Link>
						</Card.Body>
					</Card>
				</CardDeck>
			</Col>
		);
	});

	const handleSubmit = (event, a, b) => {
		event.preventDefault();
		console.log(event);
	};

	const onChangeIput = (event) => {
		setSearch = {
			[event.currentTarget.name]: event.currentTarget.value,
		};
	};

	return (
		<div>
			<Navbar />
			<Container className="mt-5 pt-5 mb-5">
				<Row>
					<Col>
						<h2 className="text-center mt-3">DISCOVER EVENTS</h2>
						<div className="underlineShowAll mx-auto mb-5"></div>
					</Col>
				</Row>

				<Row>
					<Form inline className="mx-auto" onSubmit={handleSubmit}>
						<FormControl
							type="text"
							placeholder="Search Events"
							className="mainInput"
							name="search"
							autocomplete="off"
							value={search}
							style={{ border: "1px solid black" }}
							onChange={onChangeIput}
							// ref={register({ required: true })}
						/>
						<Button
							type="submit"
							variant="outline-success"
							className="buttonSearch mainSearch"
						>
							<i className="fas fa-search"></i>
						</Button>
					</Form>
				</Row>

				<Container>
					<Row className="rowEvent">{showAllEvent}</Row>
				</Container>
			</Container>

			<Footer />
		</div>
	);
};

export default ShowAll;
