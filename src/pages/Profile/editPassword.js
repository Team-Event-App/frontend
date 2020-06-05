import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import { useForm } from "react-hook-form";
import axios from "axios";
import jwt from "jwt-decode";

import { connect } from "react-redux";
import { showSuccess } from "./../../actions/modalActions";

import "./Profile.css";
// const url = `${process.env.REACT_APP_API_URL}`;

const EditPassword = (props) => {
  const URL = `https://api.indrakawasan.com/`;
  const token = localStorage.getItem("access-token");
  const jwtdecode = jwt(token);
  const userProfile = jwtdecode.id;
  const [data, setData] = useState({});
  useEffect(() => {
    const URL = `https://api.indrakawasan.com/user/show/${userProfile}`;
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    axios
      .put(`https://api.indrakawasan.com/user/editPassword`, data, {
        headers: {
          "access-token": localStorage.getItem("access-token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        props.showSuccess("Your password already changed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };

  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisibility2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  // const [passwordShown3, setPasswordShown3] = useState(false);
  // const togglePasswordVisibility3 = () => {
  //   setPasswordShown3(passwordShown3 ? false : true);
  // };

  return (
    <div>
      <Row className="mt-5 mb-5 ">
        <Col md={{ offset: 2, span: 8 }}>
          <Card className="mx-auto mb-5 mt-5 cardPass">
            <Row>
              <Col md={4}>
                <Card.Img
                  className="mt-5 ml-3 "
                  src={`${URL}${data.imageUrl}`}
                  alt=""
                  style={{ width: "10rem" }}
                />
              </Col>
              <Col md={8}>
                <Card.Body className="p-4">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="oldPassword">
                      <Form.Label>Current Password</Form.Label>
                      <div className="input-group-prepend mainPrependPassword">
                        <Form.Control
                          type={passwordShown1 ? "text" : "password"}
                          placeholder="Current Password"
                          name="oldPassword"
                          ref={register({ required: true })}
                        />
                        <div className="input-group-text passwordPrepend">
                          <i
                            className="fa fa-eye password-icon"
                            onClick={togglePasswordVisibility1}
                          ></i>
                        </div>
                      </div>
                    </Form.Group>

                    <Form.Group controlId="password">
                      <Form.Label>New Password</Form.Label>
                      <div className="input-group-prepend mainPrependPassword">
                        <Form.Control
                          type={passwordShown2 ? "text" : "password"}
                          name="password"
                          placeholder="New Password"
                          ref={register({ required: true })}
                        />
                        <div className="input-group-text passwordPrepend">
                          <i
                            className="fa fa-eye password-icon"
                            onClick={togglePasswordVisibility2}
                          ></i>
                        </div>
                      </div>
                    </Form.Group>

                    {/* <Form.Group>
                      <Form.Label>Confirm New Password</Form.Label>
                      <div className="input-group-prepend mainPrependPassword">
                        <Form.Control
                          type={passwordShown3 ? "text" : "password"}
                          placeholder="Confirm Password"
                          ref={register({ required: true })}
                        />
                        <div className="input-group-text passwordPrepend">
                          <i
                            className="fa fa-eye password-icon"
                            onClick={togglePasswordVisibility3}
                          ></i>
                        </div>
                      </div>
                    </Form.Group> */}
                  </Form>
                  <Button
                    type="submit"
                    variant="outline-danger"
                    className="buttonProfile "
                    block
                  >
                    Save
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = { showSuccess };

export default connect(null, mapDispatchToProps)(EditPassword);
