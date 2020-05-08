import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Jumbotron,
  Button,
  Form,
  FormControl,
  Card,
  CardDeck,
} from "react-bootstrap";

import "../Main/Main.css";

import imageCards from "../../../image/eventposter.jpg";


import Trend from "../Trend/Trend";
import Category from "../Category/Category";

class Main extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>
              “What you need, is an Event, to remember for a lifetime.” ― Rehan
              Waris ―
            </h1>
            <Row>
              <Form inline className="mx-auto">
                <FormControl
                  type="text"
                  placeholder="Search Events"
                  className="mr-sm-2 formInput"
                />
                <Button variant="outline-success" className="buttonSearch">
                  <i class="fas fa-search"></i>
                </Button>
              </Form>
            </Row>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
          <h2>BROWSE EVENTS</h2>
          </Row>
          <Row>
          <div class="underline mb-4"></div>
        </Row>
          <Row>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 : 12.00 PM
                  </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 : 12.00 PM
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 : 12.00 PM
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <CardDeck className="mt-3">
              <Card>
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 : 12.00 PM
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 : 12.00 PM
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={imageCards} />
                <Card.Body>
                  <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 : 12.00 PM
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>
          <Row>
            <Button className="buttonMore mt-4 mb-4 mx-auto">
              <h5>More Events</h5>
            </Button>
          </Row>
        </Container>

        <Trend />
        <br />
        <Category />
      </div>
    );
  }
}

export default Main;
