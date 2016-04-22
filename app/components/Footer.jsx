var React = require('react');

var Footer = React.createClass({
  PropTypes: {
    copy_year: React.PropTypes.number.isRquired,
    website: React.PropTypes.string.isRequired
  },
  getDefaultProps: function(){
    return {
      website: 'My Website',
      copy_year: 2016
    };
  },
  render: function(){
    return(
      <div className="container">
        <hr/>
        <footer>
          <p>© {this.props.copy_year} {this.props.website}</p>
        </footer>
      <span classNameName="_hsShareImage hsShareImage">&nbsp;</span>
      </div>
    );
  }
});

module.exports = Footer;
