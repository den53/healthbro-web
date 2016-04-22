//require custom CSS

var React = require('react');

//Add bootstrap
var bootstrap = require('bootstrap');
var bootstrapStyle = require("../../node_modules/bootstrap/dist/css/bootstrap.css");

//Ad custom components
var Navbar = require('./Navbar.jsx');
var Jumbotron = require('./Jumbotron.jsx');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container">
          <div className="row">
            [MainContent]
          </div>

          <hr/>

          <footer>
            <p>© 2015 MyWebsite</p>
          </footer>
        </div>
        <span classNameName="_hsShareImage hsShareImage">&nbsp;</span>
      </div>
    );
  }
});

module.exports = App;
