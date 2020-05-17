import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Detail.css";

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
        <input
          type="text"
          placeholder="Nama"
          className="login-input"
          name="name"
          id="name"
        />
        <input
          type="text"
          placeholder="Quantity of Ticket"
          className="login-input"
          name="quantity"
          id="quantity"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Detail = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = `https://api.indrakawasan.com/event/show/${id}`;

    axios
      .get(URL, {
        headers: {
          "access-token": localStorage.getItem("access-token"),
        },
      })
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => {
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          alert(err.response.data.message);
        } else {
          alert("Sorry we have server problem , Please wait.. ");
        }
      });
  }, []);

  const showDetail = data.map((item, index) => {
    const URL = "https://api.indrakawasan.com/";

    return (
      <Card
        border="primary"
        key={index}
        className="mx-auto"
        style={{ width: "70rem" }}
      >
        <Card.Header>
          <Row>
            <Col md={9} sm={12}>
              <img
                src={`${URL}${item.imageEvent}`}
                alt="imageEvent"
                style={{ width: "50rem", height: "250px" }}
              />
            </Col>

            <Col md={3} sm={12}>
              <div className="mt-5 pt-5">{item.price}</div>
            </Col>
          </Row>
          <div className="mt-2" style={{ borderTop: "1px solid black" }}></div>

          <Row className="mt-3">
            <Col md={1}>
              <i class="fas fa-share-alt"></i>
            </Col>
            <Col md={1}>
              <i class="far fa-bookmark"></i>
            </Col>
            <Col md={{ span: 3, offset: 7 }}>
              <Button
                block
                variant="outline-danger"
                onClick={() => setModalShow(true)}
              >
                Buy Ticket
              </Button>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          <Container>
            <Row>
              <Col md={9}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>{item.category}</Card.Title>
                <Card.Title>{item.description}</Card.Title>
                <Card.Text className="text-justify">{item.detail}</Card.Text>
              </Col>

              <Col md={3}>
                <h5 className="mb-4">Date And Time</h5>
                <h6>{item.date}</h6>
                <h6>{item.time}</h6>
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
    );
  });

  return (
    <div>
      <Navbar />
      <Container className="mt-5 pt-5 mb-5">
        <Row>
          <Col>{showDetail}</Col>
        </Row>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Detail;
