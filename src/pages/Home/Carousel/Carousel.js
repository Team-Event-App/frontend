import React, { Component } from "react";
import { Link } from "react-router-dom";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Jumbotron, Button, Row, Col } from "react-bootstrap";

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
              <div class="underlineCarousel mb-5 mx-auto"></div>
              <Carousel centered infinite arrows slidesPerPage={4}>
                <Link href="/#" className="text-center">
                  <img alt="#" src={music} className="carouselImg" />
                  <Button className="buttonImg">Music</Button>
                </Link>
                <a href="/#" className="text-center">
                  <img src={art} alt="#" className="carouselImg" />
                  <Button className="buttonImg">Art</Button>
                </a>
                <a href="/#" className="text-center">
                  <img src={film} alt="#" className="carouselImg" />
                  <Button className="buttonImg">Film</Button>
                </a>
                <a href="/#" className="text-center">
                  <img src={fashion} alt="#" className="carouselImg" />
                  <Button className="buttonImg">Fashion</Button>
                </a>
                <a href="/#" className="text-center">
                  <img src={sport} alt="#" className="carouselImg" />
                  <Button className="buttonImg">Sport</Button>
                </a>
                <a href="/#" className="text-center">
                  <img src={festival} alt="#" className="carouselImg" />
                  <Button className="buttonImg">Festival</Button>
                </a>
                <a href="/#" className="text-center">
                  <img src={nightlife} alt="#" className="carouselImg" />
                  <Button className="buttonImg">Nightlife</Button>
                </a>
                <a href="/#" className="text-center">
                  <img src={charity} alt="#" className="carouselImg" />
                  <Button className="buttonImg">Charity</Button>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
