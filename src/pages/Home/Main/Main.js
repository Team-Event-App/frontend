import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import { connect } from 'react-redux'
import { showError } from '../../../actions/modalActions'

import Navbars from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Trend from "../Trend/Trend";
import Category from "./../Category/Category";

import Loader from '../../../components/Loader/Loader'
import "../Main/Main.css";


// const url = `${process.env.REACT_APP_API_URL}`;

const Main = (props) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const URL = `https://api.indrakawasan.com/event/show`;

    setLoading(true);
    axios
      .get(URL)
      .then((res) => {
        const data = res.data.slice(0, 8);
        setPosts(data);
        setLoading(false);
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

        <div>
          <Loader posts={posts} loading={loading} />
        </div>

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