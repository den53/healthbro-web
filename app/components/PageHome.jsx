var React = require('react');

var PageHome = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <h2 className='page-header'>Home</h2>
          <p>Some content ...</p>
        </div>
      </div>
    );
  }
});

module.exports = PageHome;
