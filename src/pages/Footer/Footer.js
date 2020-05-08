import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import './Footer.css';



class Footer extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="jumbotronNewsLetter">
          <Container>
            <h1 className="text-center">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <Row>
              <Form inline className="mx-auto mt-3 mb-3">
                <FormControl
                  type="text"
                  placeholder="Your Email"
                  style={{ width: "30rem" }}
                  className="textFieldNewsLetter"
                />
              </Form>
            </Row>
            <p className="text-center">
              GET NOTIFICATION FOR NEW EVENTS AND OFFERS.
            </p>
            <Row>
              <Button variant="primary" className="buttonSubscribe mx-auto">
                SUBSCRIBE
              </Button>
            </Row>
          </Container>
        </Jumbotron>

        <Jumbotron fluid className="jumbotronFooter">
          <Container>
            <Row className="text-center">
              <Col md={4} sm={12}>
                About
              </Col>
              <Col md={4} sm={12}>
              </Col>
              <Col md={4} sm={12}>
                Contact
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 6, offset: 5 }} className="mt-4">
                © 2020 Brand Name
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Footer;
