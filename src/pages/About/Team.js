import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Team.css";

import Evan from "../../image/about/evan.png";
import profile from "../../image/profile.png";

import fb from "../../image/icon/fb.png";
import ig from "../../image/icon/ig.png";
import lin from "../../image/icon/in.png";
import wa from "../../image/icon/wa.png";

class Team extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col>
							<h2 className="text-center mt-3">Our Team</h2>
							<div className="underlineAbout mx-auto"></div>
						</Col>
					</Row>

					<Row className="mt-5 mb-5 text-center">
						<Col md={4} sm={12}>
							<img src={Evan} alt="" className="rounded-image" />
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
										src={Evan}
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
												<a
													href="https://www.facebook.com/evan.charles.988711/"
													target="blank"
												>
													<img
														src={fb}
														alt="social-icon"
														className="social-icons"
													/>
												</a>
												<a
													href="https://www.instagram.com/evann.ch/?hl=id"
													target="blank"
												>
													<img
														src={ig}
														alt="social-icon"
														className="social-icons"
													/>
												</a>
												<a
													href="https://www.linkedin.com/in/evan-charles-%E9%BB%84%E8%A3%95%E5%B3%BB-6385971a7/"
													target="blank"
												>
													<img
														src={lin}
														alt="social-icon"
														className="social-icons"
													/>
												</a>
												<a href="https://wa.me/0895627436758" target="blank">
													<img
														src={wa}
														alt="social-icon"
														className="social-icons"
													/>
												</a>
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
												Only a man who likes ngidols and wants to be a
												full-stack developer
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
			</div>
		);
	}
}

export default Team;
