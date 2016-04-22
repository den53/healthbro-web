//require custom CSS

var React = require('react');

//Add bootstrap
var bootstrap = require('bootstrap');
var bootstrapStyle = require("../../node_modules/bootstrap/dist/css/bootstrap.css");

//Ad custom components
var Navbar = require('./Navbar.jsx');
var Jumbotron = require('./Jumbotron.jsx');
var PageHome = require('./PageHome.jsx');
var PageAbout = require('./PageAbout.jsx');
var Footer = require('./Footer.jsx');

var App = React.createClass({
  getInitialState: function(){
    return {
      page: 'home'
    };
  },
  handleHomeClick: function(){
    this.setState({
      page: 'home'
    });
  },
  handleAboutClick: function(){
    this.setState({
      page: 'about'
    });
  },
  render: function() {
    var jumbotron = '';
    var page = <PageAbout />;
    if(this.state.page === 'home'){
      jumbotron = <Jumbotron />;
      page = <PageHome />;
    }
    return (
      <div>
        <Navbar
          color='dark'
          page={this.state.page}
          homeClick={this.handleHomeClick}
          aboutClick={this.handleAboutClick}/>
        {jumbotron}
        {page}
        <Footer />
      </div>
    );
  }
});

module.exports = App;
