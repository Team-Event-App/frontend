import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	// Form,
	// FormControl,
	// Button,
} from "react-bootstrap";
import axios from "axios";
import Card from "../../components/Card/Card";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import { showError } from "./../../actions/modalActions";
import "./../Home/Main/Main.css";
import "./Search_Title.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const ShowAll = (props) => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState([]);
	const params = new URLSearchParams(props.location.search);
	const searchQuery = params.get("search");

	// show data when user go to page
	useEffect(() => {
		const URL = `https://api.indrakawasan.com/event/show`;
		axios
			.get(URL)
			.then((res) => {
				setData(res.data);
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
	useEffect(() => {
		const URL2 = `https://api.indrakawasan.com/event/getTitle?search=${searchQuery}`;

		axios
			.get(URL2)
			.then((res) => {
				setSearch(res.data);
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
	}, [searchQuery]);

	const showAllEvent = data.map((data) => {
		return (
			<Col
				key={data.id}
				lg={3}
				md={6}
				sm={12}
				className="my-2 mt-5 pt-2 pl-0 pr-0"
			>
				<Card item={data} />
			</Col>
		);
	});
	const showAllSearch = search.map((data) => {
		return (
			<Col
				key={data.id}
				lg={3}
				md={6}
				sm={12}
				className="my-2 mt-5 pt-2 pl-0 pr-0"
			>
				<Card item={data} />
			</Col>
		);
	});
	const showAll = searchQuery ? showAllSearch : showAllEvent;

	if (search.length === 0) {
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
					<Container>
						<Row className="rowEvent">
							<h1 className="text-center"><h3>404 search not found</h3>
								<p className="mb-5">We are sorry but the event you are looking for does not exist.</p></h1>
						</Row>
					</Container>
				</Container>

				<Footer />
			</div>
		)
	}
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

				{/* <Row>
					<Form inline className="mx-auto" onSubmit={handleSubmit}>
						<FormControl
							type="text"
							placeholder="Search Events"
							className="mainInput"
							name="search"
							autoComplete="off"
							defaultValue={searchQuery}
							style={{ border: "1px solid black" }}
						/>
						<Button
							type="submit"
							variant="outline-success"
							className="buttonSearch mainSearch"
						>
							<i className="fas fa-search"></i>
						</Button>
					</Form>
				</Row> */}

				<Container>
					<Row className="rowEvent">{showAll}</Row>
				</Container>
			</Container>

			<Footer />
		</div>
	);
};

const mapDispatchToProps = {
	showError
}

export default connect(null, mapDispatchToProps)(ShowAll);