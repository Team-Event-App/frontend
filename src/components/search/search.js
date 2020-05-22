import React, { Component } from "react";
import { Button, Form, Row, FormControl } from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import axios from 'axios';
class Search extends Component {
    state = {selectedEvents:[]}

    onChange = selectedEvents => {
        this.setState({
            selectedEvents:selectedEvents || []
        })
    }

    loadOptions = async(inputText , callback) => {
        const response = await axios(`https://api.indrakawasan.com/event/show?title_like=${inputText}`)
        const json=await response.json();

        callback(json.map(i => ({label:i.events,value:i.id,imageEvent : i.imageEvent})))

    }
    renderEveryEvents = events => {
        return<img src={events.imageEvent} alt="#"/>
    }
  render() {
    return (
      <Row>
        <Form inline className="mx-auto mt-5 pt-3">
          <AsyncSelect
            isMulti
            value={this.state.selectedEvents}
            onChange={this.onChange}
            loadOptions = {this.loadOptions}
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
