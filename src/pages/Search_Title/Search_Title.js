import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	FormControl,
} from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import { showError } from "./../../actions/modalActions";
import { useForm } from "react-hook-form";
import "./../Home/Main/Main.css";
import "./Search_Title.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const ShowAll = (props) => {
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

	const [data, setData] = useState([]);
	const [search, setSearch] = useState([]);
	const history = useHistory();
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
	
	if(search.length === 0){
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
					<Row className="rowEvent">
						<div className="mx-auto">
						<h3>Event not found</h3>
						</div>
					</Row>
					<Row>
            <Col className="text-center mt-4 mb-3">
              <Link to="/allevents" className="btn buttonMore mt-4 mb-4">
                <h5>Browse Events <i className="fa fa-chevron-right ml-1"></i></h5>
              </Link>
            </Col>
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