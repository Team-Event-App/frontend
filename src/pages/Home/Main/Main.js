import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import {
	Container,
	Row,
	Col,
	Jumbotron,
	Button,
	Form,
	FormControl,
	Card,
	CardDeck,
} from "react-bootstrap";

import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import "../Main/Main.css";

import Navbars from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import Trend from "../Trend/Trend";
import Category from "./../Category/Category";

const Main = () => {
	const history = useHistory();
	const [data, setData] = useState([]);
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = (values) => {
		const { search } = values;
		history.push({
			pathname: "/showall",
			search: `?search=${search}`,
		});
	};

	useEffect(() => {
		const URL = "http://api.evenity.asia/event/show";

		axios
			.get(URL)
			.then((res) => {
				const data = res.data.slice(0, 8);
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

	const showEvent = data.map((item, index) => {
		const URL = "http://api.evenity.asia/";
		return (
			<Col lg={3} md={6} sm={12} className="my-2 mt-5 pt-2 pl-0 pr-0">
				<CardDeck>
					<Card border="secondary" className="mr-5 main-card" key={index}>
						<Card.Img
							variant="top"
							src={`${URL}${item.imageEvent}`}
							alt="imageEvent"
						/>
						<Card.Body className="mainBody bg-light">
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

	return (
		<div>
			<Navbars />
			<Jumbotron fluid className="main-background mt-5">
				<Container className="pt-3">
					<h1 className="text-center mt-5 pt-3 mb-3">
						“What you need, is an Event, to remember for a lifetime.”
					</h1>
					<h1 className="text-center">― Rehan Waris ―</h1>
					<Row>
						<Form
							inline
							className="mx-auto mt-5 pt-3"
							onSubmit={handleSubmit(onSubmit)}
						>
							<FormControl
								type="text"
								placeholder="Search Events"
								className="mainInput"
								name="search"
								autocomplete="off"
								ref={register({ required: true })}
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
				</Container>
			</Jumbotron>

			<Category />

			<Container className="browseContainer mt-5 pt-5">
				<Row>
					<h2 className="mb-4 ml-5">BROWSE EVENTS</h2>
				</Row>

				<Row>
					<div className="underlineMain mb-4 ml-5"></div>
				</Row>

				<Row className="rowEvent">{showEvent}</Row>

				<Row>
					<Col className="text-center mt-4 mb-3">
						<Link to="/showall" className="btn buttonMore mt-4 mb-4">
							<h5>More Events</h5>
						</Link>
					</Col>
				</Row>
			</Container>

			<Trend />
			<br />
			<Footer />
		</div>
	);
};

export default Main;
