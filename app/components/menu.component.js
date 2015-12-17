import React from 'react';

import './menu.component.css';
import Section from './section.component';

export default React.createClass({
  getInitialState: function () {
    return {
      sections: [
        { name: 'first', content: 'first content', closed: true },
        { name: 'second', content: 'second content', closed: false },
        { name: 'third', content: 'third content', closed: true },
        { name: 'fifth', content: 'fifth content', closed: true }
      ]
    }
  },

  handleClick: function (index) {
    this.setState({
      sections: this.state.sections.map(function (object, i) {
        object.closed = i == index ? false : true;

        return object;
      })
    });
  },

  render: function () {
    return (
      <div className="MenuComponent-wrapper">
        {this.state.sections.map(function (object, i) {
          return <Section
            name={object.name}
            content={object.content}
            _id={i}
            key={i}
            closed={object.closed}
            clickHandler={this.handleClick}
          />
        }, this)}
      </div>
    )
  }
});