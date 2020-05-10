import React, { Component } from "react";
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
            <h1 className="text-center mb-4">Host Your Own Events</h1>
            <Form inline>
              <Button
                className="buttonCreate both-line-light mx-auto"
                href="/event"
              >
                Create Events
              </Button>
            </Form>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <h2 className="mb-4">TOP TRENDINGS EVENTS</h2>
          </Row>
          <Row>
            <div class="underlineTrend mb-4"></div>
          </Row>
          <Row>
            <CardDeck className="mb-4">
              <Card border="secondary" className="trend-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="trend-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="trend-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary" className="trend-card">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
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
