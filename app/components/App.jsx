//require custom CSS
require('./App.css');


var React = require('react');

//Add bootstrap
var bootstrap = require('bootstrap');
var bootstrapStyle = require("../../node_modules/bootstrap/dist/css/bootstrap.css");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">My Website</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">About
                  </a>
                </li>
                <li classNameName="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="#">One more separated link</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <div className="container">
            <h1>Hello, world!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a>
            </p>
          </div>
        </div>

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
