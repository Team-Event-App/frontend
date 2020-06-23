import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./Team.css";

import Evan from "../../image/about/evan.png";
import Indra from "../../image/about/Indra.jpeg";
import Ariq from "../../image/about/Ariq.jpg";
import fb from "../../image/icon/fb.png";
import ig from "../../image/icon/ig.png";
import lin from "../../image/icon/in.png";
import wa from "../../image/icon/wa.png";

class Team extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row className="mb-3">
						<Col>
							<h2 className="text-center mt-3 about-title">Our Team</h2>
							<div className="underlineAbout mx-auto mb-5"></div>
						</Col>
					</Row>
				</Container>

				<Container>
					<Row>
						<Card className="mb-3  mx-auto about-card">
							<Row className="no-gutters">
								<Col md={4}>
									<img
										src={Evan}
										className="about-card-img mx-auto d-block"
										alt="Evan"
										style={{ width: "15rem" }}
									/>
								</Col>
								<Col md={8}>
									<Card.Body>
										<Card.Title>
											<h5>Evan Charles</h5>
										</Card.Title>
										<Card.Title>
											<h6>Fullstack Developer</h6>
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
														alt="facebook"
														className="social-icons"
													/>
												</a>
												<a
													href="https://www.instagram.com/evann.ch/?hl=id"
													target="blank"
												>
													<img
														src={ig}
														alt="instagram"
														className="social-icons"
													/>
												</a>
												<a
													href="https://www.linkedin.com/in/evan-charles-6385971a7/"
													target="blank"
												>
													<img
														src={lin}
														alt="linkedin"
														className="social-icons"
													/>
												</a>
												<a href="https://wa.me/0895627436758" target="blank">
													<img
														src={wa}
														alt="whatsapp"
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
										src={Indra}
										className="about-card-img mx-auto d-block"
										alt="Indra"
										style={{ width: "15rem" }}
									/>
								</Col>
								<Col md={8}>
									<Card.Body>
										<Card.Title>
											<h5>Indra Kawasan</h5>
										</Card.Title>
										<Card.Title>
											<h6>Fullstack Developer</h6>
										</Card.Title>
										<Card.Text>
											<h6>
												"If you canot do great things, do small things in a
												great way"
												<br />
												-Napoleon Hill
											</h6>
										</Card.Text>
										<Card.Text>
											<small className="text-muted">
												<a
													href="https://www.facebook.com/indra.kawasansiahaan"
													target="blank"
												>
													<img
														src={fb}
														alt="facebook"
														className="social-icons"
													/>
												</a>
												<a
													href="https://www.instagram.com/siahaan.shih/"
													target="blank"
												>
													<img
														src={ig}
														alt="instagram"
														className="social-icons"
													/>
												</a>
												<a
													href="https://www.linkedin.com/in/siahaan-kawasan/"
													target="blank"
												>
													<img
														src={lin}
														alt="linkedin"
														className="social-icons"
													/>
												</a>
												<a href="https://wa.me/0975642739" target="blank">
													<img
														src={wa}
														alt="whatsapp"
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
						<Card className="mb-5 mt-3 mx-auto about-card">
							<Row className="no-gutters">
								<Col md={4}>
									<img
										src={Ariq}
										className="about-card-img mx-auto d-block"
										alt="Ariq"
										style={{ width: "15rem" }}
									/>
								</Col>
								<Col md={8}>
									<Card.Body>
										<Card.Title>
											<h5>Ariq Bimantoro</h5>
										</Card.Title>
										<Card.Title>
											<h6>Fullstack Developer</h6>
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
													<a href="https://www.facebook.com" target="blank">
														<img
															src={fb}
															alt="facebook"
															className="social-icons"
														/>
													</a>
													<a href="https://www.instagram.com" target="blank">
														<img
															src={ig}
															alt="instagram"
															className="social-icons"
														/>
													</a>
													<a href="https://www.linkedin.com" target="blank">
														<img
															src={lin}
															alt="linkedin"
															className="social-icons"
														/>
													</a>
													<a href="https://wa.me/" target="blank">
														<img
															src={wa}
															alt="whatsapp"
															className="social-icons"
														/>
													</a>
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
