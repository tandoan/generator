import React from 'react';
import { bindActionCreators } from 'redux';
import { Link, IndexLink } from 'react-router';
import * as GeneratorActions from '../actions/generator';
import { connect } from 'react-redux';
import Main from '../components/Main';

var App = React.createClass({
  // propTypes: {
  //   children: React.PropTypes.node
  // },

  render: function() {
    const { dispatch } = this.props

    return (
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-tabs">
              <li><IndexLink to="/">Home</IndexLink></li>
              <li><Link to="/generator">Generator</Link></li>
            </ul>        
          </div>
        </div>


        <div className="row">
          <div className="col-lg-12">
            <div className="main-content">
              { this.props.children }
            </div>
          </div>
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
