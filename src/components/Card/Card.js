import React from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const card = (props) => {
	const { item } = props;
	const URL = `https://api.indrakawasan.com/`;

	return (
		<CardDeck>
			<Card border="secondary" className=" main-card mr-5">
				<Card.Img
					variant="top"
					src={`${URL}${item.imageEvent}`}
					alt="imageEvent"
				/>
				<div style={{ borderTop: "1px solid black" }}></div>
				<Card.Body className="mainBody bg-white">
					<Card.Text>{item.title}</Card.Text>
					<Card.Text>Category : {item.category}</Card.Text>
					<Card.Text>
						<FontAwesomeIcon icon={faCalendar} /> {item.date}
					</Card.Text>
					<Card.Text>
						<FontAwesomeIcon icon={faClock} /> {item.time}
					</Card.Text>
					<Card.Text>
						<i className="fas fa-map-marker-alt mr-2"></i>
						{item.location}
					</Card.Text>
					<Link
						to={`/event/${item.id}`}
						className="btn btn-outline-danger btn-block"
					>
						See More
					</Link>
				</Card.Body>
			</Card>
		</CardDeck>
	);
};

export default card;
