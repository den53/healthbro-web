import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <footer>
          <p>© {this.props.copy_year} {this.props.website}</p>
        </footer>
        <span classNameName="_hsShareImage hsShareImage">&nbsp;</span>
      </div>
    );
  }
}
Footer.defaultProps = {
  website: 'My Website',
  copy_year: '2016',
};
Footer.propTypes = {
  copy_year: React.PropTypes.string.isRequired,
  website: React.PropTypes.string.isRequired,
};
