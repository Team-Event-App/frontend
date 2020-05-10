import React, { Component } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./About.css";

import calender from "../../image/calender.png";
import profile from "../../image/profile.png";

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
              <p className="about-text text-justify">
                Velit cupidatat enim nostrud incididunt pariatur ex. Amet
                laboris veniam enim mollit duis pariatur veniam magna et
                consectetur velit do id. Sint do incididunt Lorem aliqua in non
                mollit culpa aute enim sint. Nisi esse magna nostrud non sunt
                mollit velit non deserunt. Consectetur eiusmod ut aliquip amet
                sint ut reprehenderit quis tempor. Adipisicing dolore pariatur
                veniam officia excepteur consequat amet culpa esse commodo
                irure. Aute reprehenderit occaecat sit do laboris pariatur
                eiusmod elit in consectetur in non in. Reprehenderit nostrud
                laborum sunt do aliqua labore laboris magna eiusmod sit tempor.
                Veniam pariatur aliquip anim ea sit dolore. In eu mollit
                proident consequat adipisicing voluptate cupidatat ullamco
                pariatur. Non commodo est excepteur irure sint duis est ea duis
                nulla. Excepteur quis nostrud incididunt ea ad. Et est
                exercitation mollit eu adipisicing in ea. Sint velit est nulla
                sunt duis amet aliqua minim nisi occaecat aliquip nisi. Mollit
                ex enim aliqua non irure enim sit ut do nulla.
              </p>
            </Col>
            <Col md={6} sm={12}>
              <img src={calender} alt="" className="calender-img" />
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

          <Row className="mt-5 mb-5">
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
            <Card className="mb-3 mt-3 about-card">
              <Row className="no-gutters">
                <Col md={4}>
                  <img src="..." className="card-img" alt="..." />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>
                      <h5>Evan Charles</h5>
                    </Card.Title>
                    <Card.Title>
                      <h6>Frontend Developer</h6>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
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
          <Row>
            <Card className="mb-3 mt-3 about-card">
              <Row className="no-gutters">
                <Col md={4}>
                  <img src="..." className="card-img" alt="..." />
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
          <Row>
            <Card className="mb-3 mt-3 about-card">
              <Row className="no-gutters">
                <Col md={4}>
                  <img src="..." className="card-img" alt="..." />
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
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
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
