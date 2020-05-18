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
  Card,
  CardDeck,
} from "react-bootstrap";

import axios from "axios";
import { Link } from "react-router-dom";

import "./Trend.css";

const Trend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = "https://api.indrakawasan.com/event/show";

    axios
      .get(URL)
      .then((res) => {
        const data = res.data.slice(1, 5);
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

  const showTrend = data.map((item, index) => {
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
      <Jumbotron fluid className="trend-background">
        <Container>
          <h1 className="text-center mb-4 hostEvent">Host Your Own Events</h1>
          <Form inline>
            <Button
              className="buttonCreate both-line-light mx-auto"
              href="/event/create"
            >
              Create Events
            </Button>
          </Form>
        </Container>
      </Jumbotron>

      <Container className="mb-5">
        <Row>
          <h2 className="mb-2 mt-5 ml-5">TOP TRENDINGS EVENTS</h2>
        </Row>
        <Row>
          <div className="underlineTrend mb-2 ml-5"></div>
        </Row>
        <Row>
          <CardDeck>{showTrend}</CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default Trend;
