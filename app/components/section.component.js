import React from 'react';

import './section.component.css';

export default React.createClass({
  getInitialState: function () {
    return {
      visible: false
    }
  },

  handleClick: function () {
    this.setState({ visible: !this.state.visible });
  },

  render: function () {
    var divStyle = {
      display: (this.state.visible ? 'block' : 'none')
    };

    return (
      <div className="SectionComponent-wrapper">
        <div className="toggler" onClick={this.handleClick}>{this.props.name}</div>
        <div className="content" style={ divStyle }>{this.props.content}</div>
      </div>
    )
  }
})