//  require custom CSS
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

//  require npm packages
import React, { Component } from 'react';
import 'bootstrap';

// Ad custom components
import Header from './Header.js';
import LoginForm from './LoginForm.js';
/*
var Jumbotron = require('./Jumbotron.jsx');
var PageHome = require('./PageHome.jsx');
var PageAbout = require('./PageAbout.jsx');
var Footer = require('./Footer.jsx');
*/
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
      </div>
    );
  }
}
