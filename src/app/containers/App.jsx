import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as GeneratorActions from '../actions/generator';
import { connect } from 'react-redux';
import Main from '../components/Main';

var App = React.createClass({
  // propTypes: {
  //   children: React.PropTypes.node
  // },

  render: function() {
    const { dispatch } = this.props
    const links = [
      '/',
      '/generator'
      // '/parent?foo=bar',
      // '/parent/child?bar=baz',
      // '/parent/child/123?baz=foo'
    ].map(l =>
     <li>
        <Link to={l}>{l}</Link>
      </li>
    );

console.log('app props',this.props);
    return (
      <div>
        <h1>App Container</h1>
        <ul>{links}</ul>

        <div className="main-content">
          { this.props.content || <Main/>}
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    generator: state.generator
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GeneratorActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
