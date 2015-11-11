import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {

	render(){
		return (
		<div>
			<h1>CATS CATS CATS CATS!</h1>
		</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    generator: state.generator
  };
}

export default connect(
  mapStateToProps
)(Main);