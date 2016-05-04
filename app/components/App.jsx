//  require custom CSS
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

//  require npm packages
import React, { Component } from 'react';
import 'bootstrap';

// Ad custom components
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Footer from './Footer.jsx';
import DetailList from './DetailsList.jsx';
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
        Test
        <Navbar />
        <Jumbotron
          heading="The Personal Trainer in Your Pocket"
          text="HealthBro is a free app and website that makes fitness fun and helps you stay motivated."
          link="https://www.google.de"
          img="img/workout.jpg"
        />
        <DetailList />
        <Footer
          copy_year="2016" website="HealthBro.com"
        />
      </div>
    );
  }
}
