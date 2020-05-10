import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

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
              <p className="about-text">
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
            <div className="card mb-3 mt-3 about-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Evan Charles</h5>
                    <h6 className="card-title">Frontend Developer</h6>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
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
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="card mb-3 mt-3 about-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Indra Kawasan</h5>
                    <h6 className="card-title">Backend Developer</h6>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
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
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="card mb-3 mt-3 about-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Ariq Bimantoro</h5>
                    <h6 className="card-title">Frontend Developer</h6>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
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
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
