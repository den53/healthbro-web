var React = require('react');

var PageAbout = React.createClass({
  render: function(){
    return(
      <div className='container'>
        <div className='row'>
          <h2 className='page-header'>About Us</h2>
          <p>some content ...</p>
        </div>
      </div>
    );
  }
});

module.exports = PageAbout;
