import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Jumbo from './Jumbo';
import Cards from './Cards'
import 'isomorphic-fetch';
import 'es6-promise';

class Form extends Component {

    render() {
        return (
            <div>
                <Jumbo />
                <Cards />
            </div>
        )
    }
}

export default Form;