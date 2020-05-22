import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/loginActions";
import { connect } from "react-redux";
import Navlinks from './Navlinks';
import { Navbar, Nav, Button } from "react-bootstrap";

import "./Navbar.css";
import Logo from "./../../image/logo.png";

const Navbars = (props) => {
	const [data, setData] = useState();
	const [viewLogin, setViewLogin] = useState();


	const URL = "https://api.indrakawasan.com/user/show";



	useEffect(
		() => {
			if (props.viaLogin) {
				setViewLogin(
					<>
					<Navlinks/>
					</>
				);
			} else {
				setData();
				setViewLogin(
					<Nav>
						<Link to="/login">
							<Button className="signInButton   mr-5">
								Sign In
								<i className="fas fa-sign-in-alt ml-2"></i>
							</Button>
						</Link>
					</Nav>
				);
			}
		},
		[props.viaLogin],
		[]
	);

	return (
		<Navbar bg="white" variant="light" expand="lg" className="navbar fixed-top">
			<Link to="/" className="ml-3 brand">
				<img src={Logo} alt="logo" />
			</Link>
			<Navbar.Toggle aria-controls="toogle" />
			<Navbar.Collapse id="toogle">
				<Nav className="ml-auto">
					{data}
					<Link to="/event/create">
						<Button className="signInButton mr-3">
							<i className="fas fa-plus mr-2 "></i>
							Create Events
						</Button>
					</Link>
					<Nav className="ml-auto">{viewLogin}</Nav>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const mapStateToProps = (state) => {
	return {
		viaLogin: state.login.viaLogin,
	};
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);
