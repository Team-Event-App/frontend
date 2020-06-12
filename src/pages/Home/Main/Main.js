import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  // Form,
  // FormControl,
  Card,
  // Button,
  CardDeck,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import { connect } from 'react-redux'
import { showError } from '../../../actions/modalActions'

import Navbars from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Trend from "../Trend/Trend";
import Category from "./../Category/Category";
import "../Main/Main.css";


// const url = `${process.env.REACT_APP_API_URL}`;

const Main = (props) => {

  const [data, setData] = useState([]);
  // const { handleSubmit, register} = useForm();
  // const onSubmit = (values) => {
  //   const { searchT} = values;
  //   history.push({
  //     pathname: "/searchtitle",
  //     search: `?search=${searchT}`,
  //   });
  // };
  // const cariCategory = (values) => {
  //   const {search} = values;
  //   history.push({
  //     pathname:"/searchcategory",
  //     search:`?search=${search}`,
  //   })
  // }
  useEffect(() => {
    const URL = `https://api.indrakawasan.com/event/show`;

    axios
      .get(URL)
      .then((res) => {
        const data = res.data.slice(0, 8);
        setData(data);
      })
      .catch((err) => {
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        ) {
          props.showError(err.response.data.message);
        } else {
          props.showError("Sorry we have server problem , Try again later.. ");
        }
      });
  }, [props]);

  const showEvent = data.map((item, index) => {
    const URL = `https://api.indrakawasan.com/`;
    return (
      <Col
        lg={3}
        md={6}
        sm={10}
        className="my-2 mt-5 pt-2 pl-0 pr-0"
        key={index}
      >
        <CardDeck>
          <Card border="secondary" className="main-card" id="mainCard">
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
      </Col>
    );
  });

  return (
    <div>
      <Navbars />
      <Jumbotron fluid className="main-background">
        <Container className="pt-5 contQuotes">
          <h3 className="text-center mt-5 pt-3 mb-3 quotesLanding quotes1">
            “What you need, is an Event, to remember for a lifetime.”
          </h3>
          <h3 className="text-center quotesLanding quotes2 pb-3">― Rehan Waris ―</h3>
          <Row>
            <Col className="text-center mt-4 mb-3">
              <Link to="/allevents" className="btn buttonMore mt-4 mb-4">
                <h5>Browse Events <i className="fa fa-chevron-right ml-1"></i></h5>
              </Link>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Category />

      <Container className="browseContainer mt-5 pt-5">
        <Row>
          <h3 className=" ml-5 browseEve">BROWSE EVENTS</h3>
        </Row>

        <Row>
          <div className="underlineMain mb-4 ml-5"></div>
        </Row>

        <Row className="rowEvent">{showEvent}</Row>

        <Row>
          <Col className="text-center mt-4 mb-3">
            <Link to="/allevents" className="btn buttonMore mt-4 mb-4">
              <h5>More Events  <i className="fa fa-chevron-right ml-1"></i></h5>
            </Link>
          </Col>
        </Row>
      </Container>

      <Trend />
      <br />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  showError
}

export default connect(null, mapDispatchToProps)(Main);