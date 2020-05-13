import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Jumbotron, Button } from "react-bootstrap";

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
        <Jumbotron className="containerCarousel mb-5">
          <Carousel centered infinite arrows slidesPerPage={3}>
            <a href="/#" className="text-center"><img src={music} alt="Music Category" className="carouselImg"/><Button className="buttonImg">Music</Button></a>
            <a href="/#" className="text-center"><img src={art} alt="Art Category" className="carouselImg"/><Button className="buttonImg">Art</Button></a>
            <a href="/#" className="text-center"><img src={film} alt="Film Category" className="carouselImg"/><Button className="buttonImg">Film</Button></a>
            <a href="/#" className="text-center"><img src={fashion} alt="Fashion Category" className="carouselImg"/><Button className="buttonImg">Fashion</Button></a>
            <a href="/#" className="text-center"><img src={sport} alt="Sport Category" className="carouselImg"/><Button className="buttonImg">Sport</Button></a>
            <a href="/#" className="text-center"><img src={festival} alt="Festival Category" className="carouselImg"/><Button className="buttonImg">Festival</Button></a>
            <a href="/#" className="text-center"><img src={nightlife} alt="Nightlife Category" className="carouselImg"/><Button className="buttonImg">Nightlife</Button></a>
            <a href="/#" className="text-center"><img src={charity} alt="Charity" className="carouselImg"/><Button className="buttonImg">Charity</Button></a>
          </Carousel>
        </Jumbotron>
      </div>
    );
  }
}
