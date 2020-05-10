import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
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

import Navbars from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import imageCards from "../../../image/eventposter.jpg";

import Trend from "../Trend/Trend";
import Category from "../Category/Category";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Jumbotron fluid className="main-background mt-5">
          <Container className="pt-3">
            <h1 className="text-center">
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
                  <i class="fas fa-search"></i>
                </Button>
              </Form>
            </Row>
          </Container>
          <div className="text-center pt-5">
            <Button
              className="signInButton mr-3 btn both-line-dark"
              href="/event"
            >
              Booking Events
            </Button>
          </div>
        </Jumbotron>

        <Container className="browseContainer">
          <Row>
            <h2 className="mb-4">BROWSE EVENTS</h2>
          </Row>
          <Row>
            <div class="underlineMain mb-4"></div>
          </Row>
          <Row>
            <CardDeck className="card-deck">
              <Card border="secondary">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020 PM
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary">
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
              <Card border="secondary">
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

          <Row>
            <CardDeck className="mt-5 pt-2">
              <Card border="secondary">
                <Card.Img variant="top" src={imageCards} />
                <Card.Body className="card-body">
                  <Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faCalendar} /> 05-06-2020
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon icon={faClock} /> 12.00 PM
                    </Card.Text>
                  </Card.Text>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="secondary">
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
              <Card border="secondary">
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
              <Card border="secondary">
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
          <Row>
            <Button className="buttonMore mt-4 mb-4 mx-auto">
              <h5>More Events</h5>
            </Button>
          </Row>
        </Container>

        <Trend />
        <br />
        <Category />
        <Footer />
      </div>
    );
  }
}

export default Main;
