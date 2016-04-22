var React = require('react');

var Navbar = React.createClass({
  propTypes: {
    brand: React.PropTypes.string.isRequired
  },
  getDefaultProps: function(){
    return {
      brand: 'My Website',
      color: 'light'
    };
  },
  render: function(){
    var navClass = 'navbar navbar-default';
    if(this.props.color === 'dark'){
      navClass = 'navbar navbar-inverse';
    }
    var homeActive = '';
    var aboutActive = '';

    if(this.props.page === 'home'){
      homeActive = 'active';
    } else if(this.props.page === 'about'){
      aboutActive = 'active';
    }

    return(
      <div>
        <nav className={navClass} >
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">{this.props.brand}</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a className={homeActive} onClick={this.props.homeClick} href="#">Home
                  </a>
                </li>
                <li>
                  <a className={aboutActive}    onClick={this.props.aboutClick} href="#">About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Navbar;
