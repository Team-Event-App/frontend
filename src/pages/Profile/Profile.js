import React, { Component } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./Profile.css";

import Navbars from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Container className="mt-5 pt-5 mb-4">
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Profile;
