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
    ].map(l =>
     <li>
        <Link to={l} role="presentation">{l}</Link>
      </li>
    );

    return (
      <div>

        <ul className="nav nav-tabs">{links}</ul>

        <div className="main-content">
          { this.props.children }
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
