import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Jumbotron,
  Button,
  Col
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from '../../../components/Loader/Loader'
import "./Trend.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const Trend = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const URL = `https://api.indrakawasan.com/event/show`;

    setLoading(true);
    axios
      .get(URL)
      .then((res) => {
        const data = res.data.slice(1, 5);
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        throw (err)
      });
  }, []);

  return (
    <div>
      <Jumbotron fluid className="trend-background">
        <Container className="containerHost">
          <Row>
            <Col className="text-center">
          <h2 className="mb-4 hostEvent">Host Your Own Events</h2>
          </Col>
          </Row>
          <Row>
            <Col className="text-center">
          <Link to="/event/create">
            <Button className="buttonCreate both-line-light">
              Create Events
              </Button>
          </Link>
          </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container className="mb-5">
        <Row>
          <h3 className="mb-2 mt-5 ml-5">TOP TRENDINGS EVENTS</h3>
        </Row>
        <Row>
          <div className="underlineTrend mb-2 ml-5"></div>
        </Row>

        <div>
          <Loader posts={posts} loading={loading} />
        </div>

      </Container>
    </div>
  );
};

export default Trend;
