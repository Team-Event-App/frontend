import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Navbars from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

import editProfile from "./editProfile";
import editPassword from "./editPassword";
import "./Profile.css";

const Profile = () => {
	return (
		<div>
			<Navbars />
			<Container className="mt-5 pt-5 mb-4">
				<div>
					<h4 className="text-center mt-3 profileText">ACCOUNT SETTING</h4>
				</div>
				<div className="underlineProfile mx-auto "></div>

				<Row>
					<div className="sidebarUser">
						<Link
							exact
							to="/profile"
							activeClassName="active"
							className="ml-3 accountLink"
						>
							<i className="fas fa-user fa-userr mr-2"></i>
						</Link>
					</div>
					<div className="sidebarPassword">
						<Link
							exact
							to="/profile/editpassword"
							activeClassName="active"
							className="ml-3 passwordLink"
						>
							<i className="fas fa-lock mr-2"></i>
						</Link>
					</div>
				</Row>

				<Switch>
					<Route exact path="/profile" component={editProfile}></Route>

					<Route path="/profile/editpassword" component={editPassword}></Route>
				</Switch>
			</Container>
			<Footer />
		</div>
	);
};

export default Profile;
