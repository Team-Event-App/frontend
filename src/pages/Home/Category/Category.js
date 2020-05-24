import React, { Component } from "react";
import { div } from "react-router-dom";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Jumbotron, h4, Row, Col } from "react-bootstrap";

import music from "../../../image/music.jpg";
import art from "../../../image/art.jpeg";
import film from "../../../image/film.jpeg";
import fashion from "../../../image/fashion.jpeg";
import sport from "../../../image/sport.jpeg";
import festival from "../../../image/festival.jpeg";
import nightlife from "../../../image/nightlife.jpeg";
import charity from "../../../image/charity.jpg";
import education from "../../../image/Education.jpeg";

import "./Category.css";

export default class CategoryCarousel extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="containerCarousel mb-5 bg-white">
          <Row>
            <Col>
              <h2 className="text-center">CATEGORY</h2>
              <div className="underlineCarousel mb-5 mx-auto"></div>
              <Carousel
                centered
                infinite
                arrows
                slidesPerPage={4}
                autoPlay={2000}
                breakpoints={{
                  640: {
                    slidesPerPage: 1,
                    arrows: false,
                  },
                  900: {
                    slidesPerPage: 2,
                    arrows: false,
                  },
                  480: {
                    slidesPerPage: 1,
                  },
                }}
              >
                <div className="text-center">
                  <img
                    src={education}
                    alt="Education"
                    className="carouselImg"
                  />
                  <h4 className="categoryBlock">Education</h4>
                </div>
                <div className="text-center">
                  <img src={music} alt="Music" className="carouselImg" />
                  <h4 className="categoryBlock">Music</h4>
                </div>
                <div className="text-center">
                  <img src={art} alt="Art" className="carouselImg" />
                  <h4 className="categoryBlock">Art</h4>
                </div>
                <div className="text-center">
                  <img src={film} alt="Film" className="carouselImg" />
                  <h4 className="categoryBlock">Film</h4>
                </div>
                <div className="text-center">
                  <img src={fashion} alt="Fashion" className="carouselImg" />
                  <h4 className="categoryBlock">Fashion</h4>
                </div>
                <div className="text-center">
                  <img src={sport} alt="Sport" className="carouselImg" />
                  <h4 className="categoryBlock">Sport</h4>
                </div>
                <div className="text-center">
                  <img
                    src={nightlife}
                    alt="Nightlife"
                    className="carouselImg"
                  />
                  <h4 className="categoryBlock">Nightlife</h4>
                </div>
                <div className="text-center">
                  <img src={festival} alt="Festival" className="carouselImg" />
                  <h4 className="categoryBlock">Festival</h4>
                </div>
                <div className="text-center">
                  <img src={charity} alt="Charity" className="carouselImg" />
                  <h4 className="categoryBlock">Charity</h4>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
