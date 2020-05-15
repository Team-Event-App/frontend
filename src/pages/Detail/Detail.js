import React, { useParams,useEffect ,useState} from "react";

import { Container, Row, Col, Card, Button ,Modal} from "react-bootstrap";
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Detail.css";

import Event from "../../image/quoteimages.jpg";

const Detail = () => {
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {

      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Booking Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>Price / Ticket : 
            </p>
          <input
                              type="text"
                              placeholder="Name"
                              className="register-input"
                              name="name"
                              id="name"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                            />
                                  <input
                              type="number"
                              placeholder="Ticket Quantity"
                              className="register-input"
                              name="quantity"
                              id="quantity"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                            />
                                                          <input
                              type="total"
                              placeholder="Total Price"
                              className="register-input"
                              name="total"
                              id="total"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                            />
          </Modal.Body>
          <Modal.Footer>
            <Button >Submit</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    return (
      <div>
        <Navbar />
        <Container className="mt-5 pt-5 mb-5">
          <Row>
            <Col>
              <Card
                border="primary"
                className="mx-auto"
                style={{ width: "70rem" }}
              >
                <Card.Header>
                  <Row>
                    <Col md={9} sm={12}>
                      <img
                        src={Event}
                        alt="foto"
                        style={{ width: "50rem", height: "250px" }}
                      />
                    </Col>
                    <Col md={3} sm={12}>
                      <div className="mt-3">
                        <p>Date (dd/mm/yyyy)</p>

                        <h4>Event Title</h4>
                        <p>by Dependent</p>
                      </div>

                      <div className="mt-5 pt-5">$ Price</div>
                    </Col>
                  </Row>
                  <div
                    className="mt-2"
                    style={{ borderTop: "1px solid black" }}
                  ></div>

                  <Row className="mt-3">
                    <Col md={1}>
                      <i class="fas fa-share-alt"></i>
                    </Col>
                    <Col md={1}>
                      <i class="far fa-bookmark"></i>
                    </Col>
                    <Col md={{ span: 3, offset: 7 }}>
                      <Button block variant="outline-danger" onClick={() => setModalShow(true)}>
                         Buy Ticket
                      </Button>
                    </Col>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Container>
                    <Row>
                      <Col md={9}>
                        <Card.Title>
                          <p>About this Event</p>
                        </Card.Title>
                        <Card.Title>
                          Get Your VIRTUAL Lead On! One-Day Virtual Conference
                          for Administrators and School Leaders hosted by Adam
                          Dovico and Todd Nesloney on June 5, 2020
                        </Card.Title>
                        <Card.Text className="text-justify">
                          As always, educators rise to any challenge put in
                          front of them. And once again, you have done that. You
                          have ensured that while school buildings may have
                          closed, learning did not. And we know that you will be
                          excited for a new year, but to do that we must RESET.
                          This will be unlike any new school year we have ever
                          experienced. There will be new protocols, procedures,
                          and practices. Some of our previous methodologies will
                          continue, but others must be rethought. To help begin
                          that conversation and fuel your turning wheels, Get
                          Your Teach On and Get Your Lead On is proud to bring
                          to you Get Your VIRTUAL Lead On! Join hosts Todd
                          Nesloney and Adam Dovico, along with their presenting
                          team of top leaders and innovators from the world of
                          education and beyond, as they bring to you over a
                          dozen mini-sessions on a wide-range of topics that
                          will inspire, cultivate, and redefine leadership as we
                          reset our classrooms and schools. Whether you’re a
                          current school, district, or aspiring leader, or
                          someone who is looking for ways to grow, join us for a
                          day of learning on Friday, June 5!
                        </Card.Text>
                      </Col>

                      <Col md={3}>
                        <h5 className="mb-4">Date And Time</h5>
                        <h6>Day, mm-dd-yyyy</h6>
                        <h6>Time 00.00 O'Clock</h6>
                      </Col>
                    </Row>

                    <Row
                      className="mt-5 ml-1 bg-light"
                      style={{ borderRadius: "20rem" }}
                    >
                      <Col md={{ offset: 2, span: 4 }}>
                        <h5>Share this Event</h5>
                      </Col>
                      <Col md={1}>
                        <i class="fab fa-facebook-square"></i>
                      </Col>
                      <Col md={1}>
                        <i class="fab fa-whatsapp"></i>
                      </Col>
                      <Col md={1}>
                        <i class="fas fa-envelope"></i>
                      </Col>
                      <Col md={1}>
                        <i class="far fa-copy"></i>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
}
export default Detail;
