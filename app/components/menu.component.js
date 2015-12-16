import React from 'react';

import './menu.component.css';
import Section from './section.component';

export default React.createClass({
  render: function () {
    return (
      <div className="MenuComponent-wrapper">
        <Section name="first" content="first content" />
        <Section name="second" content="second content" />
        <Section name="third" content="third content" />
      </div>
    )
  }
})