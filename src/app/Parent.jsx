import React from 'react';

var Parent = React.createClass({
  propTypes:  {
    children: React.PropTypes.node
  },

  render: function() {
    return (
      <div>
        <h2>Parent</h2>
        {this.props.children}
      </div>
    );
  }
});

export default Parent;
