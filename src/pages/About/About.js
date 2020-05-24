import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Team from "./Team";

import "./About.css";

import calender from "../../image/calender.png";

import contact from "../../image/about/contact.jpg";
import host from "../../image/about/host.jpg";
import event from "../../image/about/event.jpg";

class About extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Container className="mt-5 pt-5 mb-5">
					<Row>
						<Col>
							<h2 className="text-center mt-3">About Us</h2>
							<div className="underlineAbout mx-auto"></div>
						</Col>
					</Row>

					<Row>
						<Col md={6} sm={12}>
							<h3 className="about-top">
								What is <span style={{ color: "red" }}>Evenity</span>?
							</h3>
							<p className="text-justify about-text">
								Evenity stands for event for infinity so this web is solution
								for you to find a better life to join some event or activities,
								you can find a lot of event nearby you where ever you at, you
								can still looking for some events to join with, This evenity
								belongs to anybody who try to looking for event and activity
								such as seminar, concert, sport, online lecture, online
								activities and so on, whether it’s free or paid you can easy to
								find them Finally please enjoy to explore our evenity web app
								and we are very welcome to have suggestion or critics to make
								our web better in the future, please go to our webpage and put
								your comment in our contact link page.
							</p>
						</Col>
						<Col md={6} sm={12}>
							<img src={calender} alt="" className="calender-img" />
						</Col>
					</Row>
				</Container>

				<Container className="mb-5 pb-3 ">
					<Row>
						<Col md={4} sm={12}>
							<div className="photo-grid">
								<div className="grid-item">
									<Link to="/event/create">
										<figure>
											<img src={host} height="100%" width="100%" alt="host" />
											<figcaption>
												<p>Organize an Event</p>
											</figcaption>
										</figure>
									</Link>
								</div>
							</div>
						</Col>

						<Col md={4} sm={12}>
							<div className="photo-grid">
								<div className="grid-item">
									<Link to="/">
										<figure>
											<img src={event} height="100%" width="100%" alt="event" />
											<figcaption>
												<p>Find your next Experience</p>
											</figcaption>
										</figure>
									</Link>
								</div>
							</div>
						</Col>

						<Col md={4} sm={12}>
							<div className="photo-grid">
								<div className="grid-item">
									<Link to="/contact">
										<figure>
											<img
												src={contact}
												height="100%"
												width="100%"
												alt="contact"
											/>
											<figcaption>
												<p>Contact Us for more Information</p>
											</figcaption>
										</figure>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>

				<Team />

				<Footer />
			</div>
		);
	}
}

export default About;
