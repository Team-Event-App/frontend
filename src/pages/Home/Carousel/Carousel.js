import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Container } from "react-bootstrap";

import music from "../../../image/music.jpg";
import art from "../../../image/art.jpeg";
import film from "../../../image/film.jpeg";
import fashion from "../../../image/fashion.jpeg";
import sport from "../../../image/sport.jpeg";
import festival from "../../../image/festival.jpeg";
import nightlife from "../../../image/nightlife.jpeg";
import charity from "../../../image/charity.jpg";

import "./Carousel.css";

class Slider extends Component {
  render() {
    return (
      <div>
        <Container>
          <Carousel>
            <div>
              <img src={music} className="carousel-image" />
              <p className="legend">Music</p>
            </div>
            <div>
              <img src={art} className="carousel-image" />
              <p className="legend ">Visual Arts</p>
            </div>
            <div>
              <img src={film} className="carousel-image" />
              <p className="legend">Film</p>
            </div>
            <div>
              <img src={fashion} className="carousel-image" />
              <p className="legend">Fashion</p>
            </div>
            <div>
              <img src={sport} className="carousel-image" />
              <p className="legend">Sports</p>
            </div>
            <div>
              <img src={festival} className="carousel-image" />
              <p className="legend">Festival</p>
            </div>
            <div>
              <img src={nightlife} className="carousel-image" />
              <p className="legend">Nightlife</p>
            </div>
            <div>
              <img src={charity} className="carousel-image" />
              <p className="legend">Charity & Fairs</p>
            </div>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default Slider;
