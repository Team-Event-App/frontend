import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwt from "jwt-decode";

import { connect } from "react-redux";
import { showSuccess } from "./../../actions/modalActions";
import { showError } from "./../../actions/modalActions";
import "./Profile.css";
// const url = `${process.env.REACT_APP_API_URL}`;

const EditPassword = (props) => {
  const URL = `https://api.indrakawasan.com/`;
  const defaultValue = `${URL}public/images/2020-05-23T11:48:46.274Zicon.png`;
  const token = localStorage.getItem("access-token");
  const jwtdecode = jwt(token);
  const userProfile = jwtdecode.id;
  const [data, setData] = useState({
    oldPassword: "",
    password: "",
  });
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
  }, [userProfile]);
  /* errors */
  const { register, handleSubmit /* errors */ } = useForm();
  const onSubmit = (data) => {
    axios(`https://api.indrakawasan.com/user/editPassword`, {
      method: "PUT",
      data: data,
      headers: {
        "access-token": localStorage.getItem("access-token"),
      },
    })
      .then((res) => {
        console.log(res);
        props.showSuccess("Your password succesfully changed.");
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
          props.showError("Password Incorrect");
        }
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

  const image = `${URL}${data.imageUrl || "public/images/oke.jpeg"}`;
  const imageNotFound = `${URL}public/images/oke.jpeg`;

  const myProfile = {
    backgroundImage: `Url(${image}), Url(${imageNotFound})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "200px",
    height: "200px",
  };

  return (
    <div>
      <Row className="mt-5 mb-5 ">
        <Col md={{ offset: 2, span: 8 }}>
          <Card className="mx-auto mb-5 mt-5 cardPass">
            <Row>
              <Col md={4}>
                <Card.Img
                  src={`${URL}${data.imageUrl || defaultValue}`}
                  alt=""
                  className="mx-auto mb-2 mt-3 rounded-circle d-block"
                  style={myProfile}
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
                    <Button
                      type="submit"
                      variant="outline-danger"
                      className="buttonProfile "
                      block
                    >
                      Save
                    </Button>
                  </Form>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = { showSuccess, showError };

export default connect(null, mapDispatchToProps)(EditPassword);
