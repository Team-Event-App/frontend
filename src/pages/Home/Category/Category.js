import React, { Component } from "react";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Jumbotron, Row, Col } from "react-bootstrap";

import music from "../../../image/category/music.jpg";
import art from "../../../image/category/art.jpeg";
import film from "../../../image/category/film.jpeg";
import fashion from "../../../image/category/fashion.jpeg";
import sport from "../../../image/category/sport.jpeg";
import festival from "../../../image/category/festival.jpeg";
import nightlife from "../../../image/category/nightlife.jpeg";
import charity from "../../../image/category/charity.jpg";
import education from "../../../image/category/Education.jpeg";

import "./Category.css";

export default class CategoryCarousel extends Component {
	render() {
		return (
			<div>
				<Jumbotron className="containerCarousel mb-5 bg-white">
					<Row>
						<Col>
							<h3 className="text-center">CATEGORY</h3>
							<div className="underlineCarousel mb-5 mx-auto"></div>
							<Carousel
								centered
								infinite
								arrows
								slidesPerPage={4}
								autoPlay={2500}
								breakpoints={{
									320: {
										slidesPerPage: 1,
										arrows: false,
									},
									480: {
										slidesPerPage: 1,
										arrows: false,
									},
									600: {
										slidesPerPage: 1,
										arrows: false,
									},
									640: {
										slidesPerPage: 1.4,
										arrows: false,
									},
									769: {
										slidesPerPage: 1.8,
										arrows: false,
									},
									900: {
										slidesPerPage: 2,
										arrows: false,
									},
									950: {
										slidesPerPage: 2,
										arrows: false,
									},
									1000: {
										slidesPerPage: 2.2,
										arrows: true,
									},
									1030: {
										slidesPerPage: 2.2,
										arrows: true,
									},
									1080: {
										slidesPerPage: 2.2,
										arrows: true,
									},
									1100: {
										slidesPerPage: 2.5,
										arrows: true,
									},
									1200: {
										slidesPerPage: 2.5,
										arrows: true,
									},
									1280: {
										slidesPerPage: 2.8,
										arrows: true,
									},
									1400: {
										slidesPerPage: 3,
										arrows: true,
									},
									1500: {
										slidesPerPage: 3.3,
										arrows: true,
									},
									1530: {
										slidesPerPage: 3.3,
										arrows: true,
									},
									1590: {
										slidesPerPage: 3.5,
										arrows: true,
									},
									1680: {
										slidesPerPage: 3.8,
									}
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
