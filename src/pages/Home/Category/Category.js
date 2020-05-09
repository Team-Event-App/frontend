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
              <Card>
                <Card.Img variant="top" className="category-card" src={music} />
                <Card.Body>
                  <Card.Title className="text-center">Music</Card.Title>
                  <Card.Text className="text-justify">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" className="category-card" src={art} />
                <Card.Body>
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-justify">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" className="category-card" src={film} />
                <Card.Body>
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-justify">
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  className="category-card"
                  src={fashion}
                />
                <Card.Body>
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-justify">
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
                <Card.Img variant="top" className="category-card" src={sport} />
                <Card.Body>
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-justify">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  className="category-card"
                  src={festival}
                />
                <Card.Body>
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-justify">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  className="category-card"
                  src={nightlife}
                />
                <Card.Body>
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-justify">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  className="category-card"
                  src={charity}
                />
                <Card.Body>
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-justify">
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
              <h5>See More</h5>
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Category;
