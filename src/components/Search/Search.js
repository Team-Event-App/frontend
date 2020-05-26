import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from "axios";

class Search extends Component {
    constructor(props){
        super(props);
        this.state= {
            suggestions: [],
            text:''
        }
    }
    onTextChange = (event) => {
        const value = event.target.value;
        let suggestions = [];
        // if(value.length > 0){
        //     const regex = new RegExp(`^${value}`, 'i');
        //     suggestions = countries.sort().filter(v => regex.test(v))
        // }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    }
    render(){
        return(
            <>
            <input
            type="text"
            placeholder="Search Events"
            className="mainInput"
            name="search"
        />
        <Button
            type="submit"
            variant="outline-success"
            className="buttonSearch mainSearch"
        >
            <i className="fas fa-search"></i>
        </Button>
            </>
        )
    }
}

export default Search;