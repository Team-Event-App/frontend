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
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";

import Posts from '../../components/Pagination/Posts';
import Pagination from '../../components/Pagination/Pagination';

import "./../Home/Main/Main.css";
import "./ShowAll.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const ShowAll = (props) => {
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

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(8);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get(`https://api.indrakawasan.com/event/show`);
			setPosts(res.data);
			setLoading(false);
		}
		fetchPosts();
	}, [])

	// Get Current Post
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	//Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
						<div className="underlineShowAll mx-auto"></div>
					</Col>
				</Row>
				<div>
					<Posts posts={currentPosts} loading={loading} />
					<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
				</div>
			</Container>
			<Footer />
		</div>
	);
};

const mapDispatchToProps = {
	showError
}

export default connect(null, mapDispatchToProps)(ShowAll);