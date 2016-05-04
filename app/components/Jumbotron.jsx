//  require custom CSS
import './Jumbotron.css';

import React, { Component } from 'react';


export default class Jumbotron extends Component {
  render () {
    let imgUrl = this.props.img;
    const divStyle = {
      background: `url(${imgUrl})`,
      backgroundSize: 'cover',
    };
    return (
      <div className="jumbotron" style={divStyle}>
        <div className="container">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <p>
            <a className="btn btn-primary btn-lg" href={this.props.link} role="button">Sign up for free »</a>
          </p>
        </div>
      </div>
    );
  }
}
