import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwt from "jwt-decode";

import "./Profile.css";

// const url = `${process.env.REACT_APP_API_URL}`;

const EditProfile = () => {
  const URL = `https://api.indrakawasan.com/`;
  const defaultValue = `${URL}public/images/2020-05-23T11:48:46.274Zicon.png`;
  const token = localStorage.getItem("access-token");
  const jwtdecode = jwt(token);
  const userProfile = jwtdecode.id;
  const [data, setData] = useState({});
  let imageRef = useRef();
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

  const image = `${URL}${data.imageUrl || "public/images/oke.jpeg"}`;
  const imageNotFound = `${URL}public/images/oke.jpeg`;

  const myProfile = {
    backgroundImage: `Url(${image}), Url(${imageNotFound})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "200px",
    height: "200px",
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();

    console.log(data);
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    const image = imageRef.current.files;
    if (image && image[0]) formData.append("imageUrl", image[0], image[0].name);

    axios
      .put(`https://api.indrakawasan.com/user/edit/${userProfile}`, formData, {
        headers: {
          "access-token": localStorage.getItem("access-token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Your profile already changed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Row className="mb-5 mt-5">
      <Col md={{ offset: 3, span: 6 }}>
        <Card>
          <Card.Body className="profileBody">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Card.Img
                src={`${URL}${data.imageUrl || defaultValue}`}
                alt=""
                className="mx-auto mb-2 mt-3 rounded-circle d-block"
                style={myProfile}
              />
              <div className="d-flex ml-5 pl-5 mb-3 mt-3 justify-content-center">
                <input
                  type="file"
                  name="imageUrl"
                  defaultValue={data.imageUrl}
                  ref={imageRef}
                />
              </div>
              <hr style={{ border: "1px solid black" }} />
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  defaultValue={data.username}
                  ref={register({ required: true })}
                />
              </Form.Group>

              <Form.Group controlId="fullname">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  defaultValue={data.fullname}
                  ref={register({ required: true })}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue={data.email}
                  ref={register({ required: true })}
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  defaultValue={data.phone}
                  ref={register({ required: true })}
                />
              </Form.Group>
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
        </Card>
      </Col>
    </Row>
  );
};

export default EditProfile;
