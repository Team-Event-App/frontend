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

import "./../Home/Main/Main.css";
import "./SearchCat.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const ShowAll = (props) => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState([]);

	const params = new URLSearchParams(props.location.search);
	const searchQuery = params.get("searchh");

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
		const URL2 = `https://api.indrakawasan.com/event/getCategory?search=${searchQuery}`;

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

	// const handleSubmit = (event, a, b) => {
	// 	event.preventDefault();
	// 	const newSearch = event.target[0].value;
	// 	console.log(newSearch);
	// 	if (newSearch === "" && newSearch === null && newSearch === undefined) {
	// 		const url2 = `https://api.indrakawasan.com/event/show`;
	// 		axios
	// 			.get(url2)
	// 			.then((res) => {
	// 				setData(res.data);
	// 			})
	// 			.catch((err) => {
	// 				if (
	// 					err &&
	// 					err.response &&
	// 					err.response.data &&
	// 					err.response.data.message
	// 				) {
	// 					alert(err.response.data.message);
	// 				} else {
	// 					alert("Sorry we have server problem , Try again later.. ");
	// 				}
	// 			});
	// 	} else {
	// 		const url = `https://api.indrakawasan.com/event/show/${newSearch}`;
	// 		axios.get(url).then((res) => {
	// 			setSearch(res.data);
	// 		});
	// 	}
	// };

	const showAll = searchQuery ? showAllSearch : showAllEvent;

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

export default ShowAll;