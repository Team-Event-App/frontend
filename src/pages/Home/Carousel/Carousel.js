import React, { Component } from "react";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import music from "../../../image/music.jpg";
import art from "../../../image/art.jpeg";
import film from "../../../image/film.jpeg";
import fashion from "../../../image/fashion.jpeg";
import sport from "../../../image/sport.jpeg";
import festival from "../../../image/festival.jpeg";
import nightlife from "../../../image/nightlife.jpeg";
import charity from "../../../image/charity.jpg";

import "./Carousel.css";

export default class CategoryCarousel extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="containerCarousel mb-5 bg-white">
          <Row>
            <Col>
              <h2 className="text-center">CATEGORY</h2>
              <div class="underlineCarousel mb-5 mx-auto "></div>
              <Carousel centered infinite arrows slidesPerPage={4}>
                <Link to="#" className="text-center">
                  <img src={music} className="carouselImg" alt="music" />
                  <Button className="buttonImg">Music</Button>
                </Link>
                <Link to="#" className="text-center">
                  <img src={art} className="carouselImg" alt="visual art" />
                  <Button className="buttonImg">Visual Art</Button>
                </Link>
                <Link to="#" className="text-center">
                  <img src={film} className="carouselImg" alt="film" />
                  <Button className="buttonImg">Film</Button>
                </Link>
                <Link to="#" className="text-center">
                  <img src={fashion} className="carouselImg" alt="fashion" />
                  <Button className="buttonImg">Fashion</Button>
                </Link>
                <Link to="#" className="text-center">
                  <img src={sport} className="carouselImg" alt="sport" />
                  <Button className="buttonImg">Sport</Button>
                </Link>
                <Link to="#" className="text-center">
                  <img src={festival} className="carouselImg" alt="festival" />
                  <Button className="buttonImg">Festival</Button>
                </Link>
                <Link to="#" className="text-center">
                  <img
                    src={nightlife}
                    className="carouselImg"
                    alt="nightlife"
                  />
                  <Button className="buttonImg">Nightlife</Button>
                </Link>
                <Link to="#" className="text-center">
                  <img src={charity} className="carouselImg" alt="charity" />
                  <Button className="buttonImg">Charity</Button>
                </Link>
              </Carousel>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
