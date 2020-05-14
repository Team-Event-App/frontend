import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import "./CreateEvent.css";

import Navbars from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  const [data, setData] = useState({
    title: "",
    category: "",
    limitPeople: "",
    organizerName: "",
    responsibleName: "",
    typeEvent: "",
    description: "",
    location: "",
    price: "",
    date: "",
    detail: "",
  });
  const [image, setImage] = useState("");

  const [formData, setFormData] = useState("");
  useEffect(() => {
    setFormData(new FormData());
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.set("title", data.title);
    formData.set("category", data.category);
    formData.set("limitPeople", data.limitPeople);
    formData.set("organizerName", data.organizerName);
    formData.set("responsibleName", data.responsibleName);
    formData.set("typeEvent", data.typeEvent);
    formData.set("description", data.description);
    formData.set("location", data.location);
    formData.set("price", data.price);
    formData.set("date", data.date);
    formData.append("imageEvent", image);
    formData.set("detail", data.detail);

    axios
      .post("http://api.indrakawasan.com/event/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("result", res);
      });
  };
  return (
    <div className="mt-5 pt-5">
      <Navbars />
      <Container>
        <Row>
          <Col>
            <h2 className="text-center pt-5 mb-4 titleCategory">
              Create Event
            </h2>
            <div className="underlineEvent mx-auto"></div>
          </Col>
        </Row>
        <Form
          className="justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          <Form.Row>
            <Container>
              <Form.Group as={Col} md={6} controlId="formBasicEmail">
                <Form.Label className="subLabel pb-2">Event Info</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  className="inputText"
                  name="title"
                  value={data.title}
                  onChange={(e) => setData(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Your Event Main Title.
                </Form.Text>
              </Form.Group>
              <Form.Row className="pl-3">
                <Form.Group as={Col} md={2}>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    className="inputText"
                    name="category"
                    value={data.category}
                    onChange={(e) => setData(e.target.value)}
                  >
                    <option>Music</option>
                    <option>Art</option>
                    <option>Film</option>
                    <option>Fashion</option>
                    <option>Festival</option>
                    <option>Sport</option>
                    <option>Nightlife</option>
                    <option>Charity</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md={2}>
                  <Form.Label>People</Form.Label>
                  <Form.Control
                    type="text"
                    className="inputText"
                    placeholder="Max People"
                    name="limitPeople"
                    value={data.limitPeople}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group as={Col} md={2.5} controlId="formBasicEmail">
                  <Form.Label>Organizer Event</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Organizer Event"
                    className="inputText"
                    name="organizerName"
                    value={data.organizerName}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md={3} controlId="formBasicEmail">
                  <Form.Label>Dependent Event</Form.Label>
                  <Form.Control
                    type="text"
                    className="inputText"
                    name="responsibleName"
                    placeholder="Dependent"
                    value={data.responsibleName}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group
                  as={Col}
                  md={5}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description Event</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    className="inputText"
                    placeholder="Description"
                    style={{ width: "33rem" }}
                    name="description"
                    value={data.description}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Label className="subLabel pl-3">Location</Form.Label>
              <Form.Row className="pl-3">
                <Form.Group as={Col} md={6} controlId="formBasicEmail">
                  <Form.Group as={Col} md={4} className="pr-5">
                    <Form.Label>Type Event</Form.Label>
                    <Form.Control
                      as="select"
                      value={data.typeEvent}
                      className="inputText"
                      name="typeEvent"
                      onChange={(e) => setData(e.target.value)}
                    >
                      <option>Online</option>
                      <option>Offline</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Label className="pb-2">Venue Location</Form.Label>
                  <Form.Control
                    type="text"
                    className="inputText"
                    name="location"
                    placeholder="Location"
                    value={data.location}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group as={Col} md={6} controlId="formBasicEmail">
                  <Form.Label className="subLabel">Detail Event</Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-4">
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        id="inputGroupPrepend"
                        className="inputPrepand"
                      >
                        Rp.
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      name="price"
                      className="inputText"
                      value={data.price}
                      onChange={(e) => setData(e.target.value)}
                    />
                    <input type="date" className="pl-3 ml-3 inputText"></input>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-4">
                <Form.Group className="inputText">
                  <Form.File
                    id="file"
                    name="imageEvent"
                    onChange={handleImage}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="pl-3">
                <Form.Group
                  as={Col}
                  md={6}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Detail Event</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    className="inputText"
                    name="detail"
                    value={data.detail}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group className="pl-3">
                <Button className="save">Save</Button>
              </Form.Group>
            </Container>
          </Form.Row>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Index;
