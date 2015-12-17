import React from 'react';

import './section.component.css';

export default React.createClass({
  clickHandler: function () {
    this.props.clickHandler(this.props._id);
  },

  render: function () {
    var divStyle = {
      display: (this.props.closed ? 'none' : 'block')
    };

    return (
      <div className="SectionComponent-wrapper">
        <div className="toggler" onClick={this.clickHandler}>{this.props.name}</div>
        <div className="content" style={divStyle}>{this.props.content}</div>
      </div>
    )
  }
});