import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	FormControl,
} from "react-bootstrap";

import { connect } from 'react-redux'
import { showError } from '../../actions/modalActions'

import axios from "axios";
import { useForm } from "react-hook-form";
import Card from "../../components/Card/Card";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./../Home/Main/Main.css";
import "./ShowAll.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const ShowAll = (props) => {
	const [data, setData] = useState([]);
	const history = useHistory();
	const { handleSubmit, register } = useForm();
	const onSubmit = (values) => {
		const { searchh } = values;
		history.push({
			pathname: "/searchtitle",
			search: `?search=${searchh}`,
		});
	};
	const cariCategory = (values) => {
		const { search } = values;
		history.push({
			pathname: "/searchcategory",
			search: `?search=${search}`,
		})
	}
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
					props.showError(err.response.data.message);
				} else {
					props.showError("Sorry we have server problem , Try again later.. ");
				}
			});
	}, [props]);
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
	return (
		<div>
			<Navbar />
			<Container className="mt-5 pt-5 mb-5">
				<Row className="mb-5">
					<Form
						inline
						className="mx-auto mt-5 pt-3"
						onSubmit={handleSubmit(onSubmit)}
					>
						<FormControl
							type="text"
							placeholder="Search By Title"
							className="mainInput"
							name="searchh"
							autoComplete="off"
							ref={register({ required: false })}
						/>

						<i className="fa fa-search buttonSearch "></i>
					</Form>
					<Form
						inline
						className="mx-auto mt-5 pt-3"
						onSubmit={handleSubmit(cariCategory)}
					>
						<FormControl
							type="text"
							placeholder="Search By Category"
							className="mainInput"
							name="search"
							autoComplete="off"
							ref={register({ required: false })}
						/>
						<i className="fa fa-search buttonSearch "></i>
					</Form>
				</Row>
				<Row>
					<Col>
						<h2 className="text-center mt-3">DISCOVER EVENTS</h2>
						<div className="underlineShowAll mx-auto mb-5"></div>
					</Col>
				</Row>
				<Container>
					<Row className="rowEvent">{showAllEvent}</Row>
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