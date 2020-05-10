import React, { Component } from "react";
import { Container, Row, Card, CardDeck, Button } from "react-bootstrap";

import "./Category.css";

import music from "../../../image/music.jpg";
import art from "../../../image/art.jpeg";
import film from "../../../image/film.jpeg";
import fashion from "../../../image/fashion.jpeg";
import sport from "../../../image/sport.jpeg";
import festival from "../../../image/festival.jpeg";
import nightlife from "../../../image/nightlife.jpeg";
import charity from "../../../image/charity.jpg";

class Category extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h2 className="titleCategory">CATEGORY</h2>
          </Row>
          <Row>
            <div class="underlineCategory mb-4"></div>
          </Row>
          <Row>
            <CardDeck className="mt-3">
              <Card border="danger" className="category-card">
                <Card.Img
                  variant="top"
                  className="category-image"
                  src={music}
                />
                <Card.Body>
                  <Card.Title className="text-center">Music</Card.Title>
                </Card.Body>
              </Card>
              <Card border="danger" className="category-card">
                <Card.Img variant="top" className="category-image" src={art} />
                <Card.Body>
                  <Card.Title className="text-center">Visual Arts</Card.Title>
                </Card.Body>
              </Card>
              <Card border="danger" className="category-card">
                <Card.Img variant="top" className="category-image" src={film} />
                <Card.Body>
                  <Card.Title className="text-center">Film</Card.Title>
                </Card.Body>
              </Card>
              <Card border="danger" className="category-card">
                <Card.Img
                  variant="top"
                  className="category-image"
                  src={fashion}
                />
                <Card.Body>
                  <Card.Title className="text-center">Fashion</Card.Title>
                </Card.Body>
              </Card>
              <Card border="danger" className="category-card">
                <Card.Img
                  variant="top"
                  className="category-image"
                  src={fashion}
                />
                <Card.Body>
                  <Card.Title className="text-center">Fashion</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <CardDeck className="mt-3">
              <Card border="danger" className="category-card">
                <Card.Img
                  variant="top"
                  className="category-image"
                  src={sport}
                />
                <Card.Body>
                  <Card.Title className="text-center">Sports</Card.Title>
                </Card.Body>
              </Card>
              <Card border="danger" className="category-card">
                <Card.Img
                  variant="top"
                  className="category-image"
                  src={festival}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Festival & Fairs
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card border="danger" className="category-card">
                <Card.Img
                  variant="top"
                  className="category-image"
                  src={nightlife}
                />
                <Card.Body>
                  <Card.Title className="text-center">Nightlife</Card.Title>
                </Card.Body>
              </Card>
              <Card border="danger" className="category-card">
                <Card.Img
                  variant="top"
                  className="category-image"
                  src={charity}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Charity & Causes
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card border="danger" className="category-card">
                <Card.Img
                  variant="top"
                  className="category-image"
                  src={fashion}
                />
                <Card.Body>
                  <Card.Title className="text-center">Fashion</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>

          <Row>
            <Button className="buttonMore mt-4 mb-4 mx-auto">
              <h5>See More</h5>
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Category;
