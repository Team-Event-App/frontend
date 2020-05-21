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
							<Carousel centered infinite arrows slidesPerPage={4}>
								<Link to="/showAll" className="text-center">
									<img alt="#" src={music} className="carouselImg" />
									<Button className="buttonImg" block>
										Music
									</Button>
								</Link>
								<a href="/showAll" className="text-center">
									<img src={art} alt="#" className="carouselImg" />
									<Button className="buttonImg" block>
										Art
									</Button>
								</a>
								<a href="/showAll" className="text-center">
									<img src={film} alt="#" className="carouselImg" />
									<Button className="buttonImg" block>
										Film
									</Button>
								</a>
								<a href="/showAll" className="text-center">
									<img src={fashion} alt="#" className="carouselImg" />
									<Button className="buttonImg" block>
										Fashion
									</Button>
								</a>
								<a href="/showAll" className="text-center">
									<img src={sport} alt="#" className="carouselImg" />
									<Button className="buttonImg" block>
										Sport
									</Button>
								</a>
								<a href="/showAll" className="text-center">
									<img src={festival} alt="#" className="carouselImg" />
									<Button className="buttonImg" block>
										Festival
									</Button>
								</a>
								<a href="/showAll" className="text-center">
									<img src={nightlife} alt="#" className="carouselImg" />
									<Button className="buttonImg" block>
										Nightlife
									</Button>
								</a>
								<a href="/showAll" className="text-center">
									<img src={charity} alt="#" className="carouselImg" />
									<Button className="buttonImg" block>
										Charity
									</Button>
								</a>
							</Carousel>
						</Col>
					</Row>
				</Jumbotron>
			</div>
		);
	}
}
