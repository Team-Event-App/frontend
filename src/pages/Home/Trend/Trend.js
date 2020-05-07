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

class Trend extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 className="text-center mb-4">Host Your Own Events</h1>
            <Form inline>
              <Button variant="primary" className="mx-auto">
                Create Events
              </Button>
            </Form>
          </Container>
        </Jumbotron>

        <Container>
          <h2 className="mb-4">TOP TRENDINGS</h2>
          <Row>
            <CardDeck className="mb-4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
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
