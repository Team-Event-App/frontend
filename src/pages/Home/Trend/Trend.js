import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Row,
  Jumbotron,
  Form,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";

import "./Trend.css";

import imageCards from "../../../image/eventposter.jpg";

class Trend extends Component {
  render() {
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

        <Container>
          <Row>
            <h2 className="mb-2 mt-5 ml-5">TOP TRENDINGS EVENTS</h2>
          </Row>
          <Row>
            <div className="underlineTrend mb-2 ml-5"></div>
          </Row>
          <Row>
            <CardDeck className="mt-5 pt-2 mb-5">
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020M
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="main-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 12.00 PM
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Trend;
