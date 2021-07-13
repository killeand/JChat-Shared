import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <p><span className="bi-arrow-repeat animate-spin inline-block"></span> Loading...</p>
        );
    }
}