//require custom CSS

var React = require('react');

//Add bootstrap
var bootstrap = require('bootstrap');
var bootstrapStyle = require("../../node_modules/bootstrap/dist/css/bootstrap.css");

//Ad custom components
var Navbar = require('./Navbar.jsx');
var Jumbotron = require('./Jumbotron.jsx');
var PageHome = require('./PageHome.jsx');
var Footer = require('./Footer.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar color='dark'/>
        <Jumbotron />
        <PageHome />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
