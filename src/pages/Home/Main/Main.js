import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
  FormControl,
  Card,
  CardDeck,
} from "react-bootstrap";

import axios from "axios";

import { Link } from "react-router-dom";

import "../Main/Main.css";

import Navbars from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import Trend from "../Trend/Trend";
import Category from "./../Category/Category";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = "https://api.indrakawasan.com/event/show";

    axios
      .get(URL)
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

  const showEvent = data.map((item, index) => {
    const URL = "https://api.indrakawasan.com/";
    return (
      <Col md={3} sm={12} className="my-2 mt-5 pt-2 pl-0 pr-0" key={index}>
        <Card
          border="secondary"
          className="main-card"
          key={index}
          style={{ height: "100%" }}
        >
          <Card.Img variant="top" src={`${URL}${item.imageEvent}`} />
          <Card.Body>
            <Card.Text>{item.title}</Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faCalendar} /> {item.date}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faClock} /> {item.time}
            </Card.Text>
            <Card.Text>
              <i className="fas fa-map-marker-alt mr-2"></i>
              {item.location}
            </Card.Text>
            <Link to={`/event/${item.id}`}>
              <Button block variant="outline-danger">
                See More
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <Navbars />
      <Jumbotron fluid className="main-background mt-5">
        <Container className="pt-3">
          <h1 className="text-center mt-5 ">
            “What you need, is an Event, to remember for a lifetime.”
          </h1>
          <h1 className="text-center">― Rehan Waris ―</h1>
          <Row>
            <Form inline className="mx-auto mt-5">
              <FormControl
                type="text"
                placeholder="Search Events"
                className="mainInput "
              />
              <Button
                variant="outline-success"
                className="buttonSearch mainSearch"
              >
                <i className="fas fa-search"></i>
              </Button>
            </Form>
          </Row>
        </Container>
      </Jumbotron>

      <Category />

      <Container className="browseContainer mt-5 pt-5">
        <Row>
          <h2 className="mb-4 ml-5">BROWSE EVENTS</h2>
        </Row>
        <Row>
          <div className="underlineMain mb-4 ml-5"></div>
        </Row>
      </Container>

      <Container>
        <Row>
          <CardDeck>{showEvent}</CardDeck>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="text-center mt-4 mb-3">
            <Link to="/showall">
              <Button className="buttonMore mt-4 mb-4">
                <h5>More Events</h5>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Trend />
      <br />
      <Footer />
    </div>
  );
};

export default Main;
