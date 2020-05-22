import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./About.css";

import calender from "../../image/calender.png";
import profile from "../../image/profile.png";

import contact from "../../image/about/contact.jpg";
import host from "../../image/about/host.jpg";
import event from "../../image/about/event.jpg";

import fb from "../../image/icon/fb.png";
import ig from "../../image/icon/ig.png";
import lin from "../../image/icon/in.png";
import wa from "../../image/icon/wa.png";

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

				<Container>
					<Row>
						<Col>
							<h2 className="text-center mt-3">Our Team</h2>
							<div className="underlineAbout mx-auto"></div>
						</Col>
					</Row>

					<Row className="mt-5 mb-5 text-center">
						<Col md={4} sm={12}>
							<img src={profile} alt="" className="rounded-image" />
						</Col>
						<Col md={4} sm={12}>
							<img src={profile} alt="" className="rounded-image" />
						</Col>
						<Col md={4} sm={12}>
							<img src={profile} alt="" className="rounded-image" />
						</Col>
					</Row>
				</Container>

				<Container>
					<Row>
						<Card className="mb-3 mt-3 mx-auto about-card">
							<Row className="no-gutters">
								<Col md={4}>
									<img
										src={profile}
										className="about-card-img mx-auto d-block"
										alt="..."
										style={{ width: "15rem" }}
									/>
								</Col>
								<Col md={8}>
									<Card.Body>
										<Card.Title>
											<h5>Evan Charles</h5>
										</Card.Title>
										<Card.Title>
											<h6>Frontend Developer</h6>
										</Card.Title>
										<Card.Text className="mt-3">
											<h6>
												“Styles come and go. Good design is a language, not a
												Style.” <br />
												-Massimo Vignelli
											</h6>
										</Card.Text>
										<Card.Text>
											<small className="text-muted">
												<Link to="www.google.com">
													<img
														src={fb}
														alt="social-icon"
														className="social-icons"
													/>
												</Link>
												<img
													src={ig}
													alt="social-icon"
													className="social-icons"
												/>
												<img
													src={lin}
													alt="social-icon"
													className="social-icons"
												/>
												<img
													src={wa}
													alt="social-icon"
													className="social-icons"
												/>
											</small>
										</Card.Text>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Row>
					<Row>
						<Card className="mb-3 mt-3 mx-auto about-card">
							<Row className="no-gutters">
								<Col md={4}>
									<img
										src={profile}
										className="about-card-img mx-auto d-block"
										alt="..."
										style={{ width: "15rem" }}
									/>
								</Col>
								<Col md={8}>
									<Card.Body>
										<Card.Title>
											<h5>Indra Kawasan</h5>
										</Card.Title>
										<Card.Title>
											<h6>Backend Developer</h6>
										</Card.Title>
										<Card.Text>
											<p>
												This is a wider card with supporting text below as a
												natural lead-in to additional content. This content is a
												little bit longer.
											</p>
										</Card.Text>
										<Card.Text>
											<small className="text-muted">
												<img
													src={fb}
													alt="social-icon"
													className="social-icons"
												/>
												<img
													src={ig}
													alt="social-icon"
													className="social-icons"
												/>
												<img
													src={lin}
													alt="social-icon"
													className="social-icons"
												/>
												<img
													src={wa}
													alt="social-icon"
													className="social-icons"
												/>
											</small>
										</Card.Text>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Row>
					<Row>
						<Card className="mb-5 mt-3 mx-auto about-card">
							<Row className="no-gutters">
								<Col md={4}>
									<img
										src={profile}
										className="about-card-img mx-auto d-block"
										alt="..."
										style={{ width: "15rem" }}
									/>
								</Col>
								<Col md={8}>
									<Card.Body>
										<Card.Title>
											<h5>Ariq Bimantoro</h5>
										</Card.Title>
										<Card.Title>
											<h6>Frontend Developer</h6>
										</Card.Title>
										<Card.Text>
											<p>
											Only a man who likes ngidols and wants to be a full-stack developer
											</p>
										</Card.Text>
										<Card.Text>
											<p>
												<small className="text-muted">
													<img
														src={fb}
														alt="social-icon"
														className="social-icons"
													/>
													<img
														src={ig}
														alt="social-icon"
														className="social-icons"
													/>
													<img
														src={lin}
														alt="social-icon"
														className="social-icons"
													/>
													<img
														src={wa}
														alt="social-icon"
														className="social-icons"
													/>
												</small>
											</p>
										</Card.Text>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default About;
