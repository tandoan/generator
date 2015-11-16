import React, { Component } from 'react';
import { connect } from 'react-redux';

let placeholder = require('./logo_grey_transparent.png');
class Main extends Component {

	render(){
		return (
		<div className="container">
			<h1>CATS CATS CATS CATS!</h1>

			<div className="row">
				<div className="col-lg-12">
					<h2>Most Popular</h2>
					<div className="row">
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12">
					<h2>Newest</h2>
					<div className="row">
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
						<div className="col-lg-3">
							<img src={placeholder}/>
						</div>
					</div>
				</div>
			</div>

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