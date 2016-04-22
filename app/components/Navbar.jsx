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
      </div>
    );
  }
});

module.exports = Navbar;
