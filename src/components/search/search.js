import React, { Component } from "react";
import { Button, Form, Row, FormControl } from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import axios from 'axios';
class Search extends Component {
  render() {
    return (
      <Row>
        <Form inline className="mx-auto mt-5 pt-3">
          <FormControl
            type="text"
            placeholder="Search Events"
            className="mainInput "
          />
          <Button variant="outline-success" className="buttonSearch mainSearch">
            <i className="fas fa-search"></i>
          </Button>
        </Form>
      </Row>
    );
  }
}

export default Search;
