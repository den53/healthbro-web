//require custom CSS
require('./Jumbotron.css');

var React = require('react');

var Jumbotron = React.createClass({
  PropTypes: {
    heading: React.PropTypes.string,
    text: React.PropTypes.string,
    link: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      heading: 'Welcome!',
      text: 'Welcome to my great new website build with React components',
      link: 'http://google.com'
    };
  },
  render: function(){
    return(
      <div className="jumbotron">
        <div className="container">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <p>
            <a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more »</a>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Jumbotron;
