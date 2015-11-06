import React from 'react';
var DateTimeField = require('react-bootstrap-datetimepicker');
import { readImage, updateCaption } from '../../actions/assholeGenerator';
import { connect } from 'react-redux';

function mapStateToProps(state){
	console.log('mapStateToProps',state);
	return {

		caption: state.assholeGenerator.caption
	}
}


var Memeform = React.createClass({
	handldleSubmit: function(event){},
	handleFile: function(event){
		console.log('in handleFile', event);
		readImage(event, new FileReader());
	},
	handlePan: function(direction, event){},
	zoomIn: function(event){},
	zoomOut: function(event){},
	handleRotate: function(direction,event){},
	handleDateChange: function(event){},
	handleChange: function(field,event){},


	handleCaptionChange: function(event){
		console.log(this.props)
		this.props.route.store.dispatch(updateCaption(event.target.value));
	},

	propTypes: {
		assholeName: React.PropTypes.string.isRequired,
		ownerName: React.PropTypes.string.isRequired,
		email: React.PropTypes.string.isRequired,
		charLimit: React.PropTypes.number.isRequired,
		caption: React.PropTypes.string.isRequired
	},
	getDefaultProps: function() {
		return {
			assholeName: '',
			ownerName: '',
			email: '',
			charLimit: 530,
			caption: ''	
		};
	},
	render: function () {
		return (
			<div>


			<form onSubmit={this.handleSubmit}>

			<h4>Upload Image</h4>

			<div className="form-group">
			<label htmlFor="fileInput">Choose Picture</label>
			<input id="fileInput" className="form-control" type="file" onChange={this.handleFile} accept="image/*"/>
			<p className="help-block">Choose a picture to upload</p>

			<div className="btn-toolbar" role="toolbar" >
			<div className="btn-group" role="group" >
			<button className="btn btn-default" type="button" onClick={this.zoomIn}><i className="fa fa-search-plus"></i></button>
			<button className="btn btn-default" type="button" onClick={this.zoomOut}><i className="fa fa-search-minus"></i></button>
			</div>
			<div className="btn-group" role="group" >
			<button className="btn btn-default" type="button" onClick={this.handlePan.bind(this,'L')}><i className="fa fa-arrow-left"></i></button>
			<button className="btn btn-default" type="button" onClick={this.handlePan.bind(this,'D')}><i className="fa fa-arrow-down"></i></button>
			<button className="btn btn-default" type="button" onClick={this.handlePan.bind(this,'U')}><i className="fa fa-arrow-up"></i></button>
			<button className="btn btn-default" type="button" onClick={this.handlePan.bind(this,'R')}><i className="fa fa-arrow-right"></i></button>
			</div>
			<div className="btn-group" role="group" >
			<button className="btn btn-default" type="button" onClick={this.handleRotate.bind(this,'CW')}><i className="fa fa-rotate-right"></i></button>
			<button className="btn btn-default" type="button" onClick={this.handleRotate.bind(this,'CCW')}><i className="fa fa-rotate-left"></i></button>
			</div>

			</div>
			<p className="help-block">Zoom/Move/Rotate image</p>

			</div>

			<div className="form-group" style={{position:'relative'}}>
			<label>Date</label>
			<DateTimeField mode="date" onChange={this.handleDateChange}/>
			</div>

			<div className="form-group">
			<label htmlFor="assholeName">Asshole Name</label>
			<input id="assholeName" className="form-control" placeholder="i.e. Twatwaffles" type="text" onChange={this.handleChange.bind(this, 'assholeName')} value={this.props.assholeName}/><br/>

			<div>

			<label htmlFor="captionInput">Why are they an asshole?</label>
			<small style={{float:'right'}} className={ (this.props.caption.length < 500)? 'bg-success' : (this.props.caption.length < 520 ) ? 'bg-warning': 'bg-danger'  }>({this.props.caption.length} of {this.props.charLimit})</small>
			</div>
			<textarea id="captionInput" className="form-control caption-input" value={this.props.caption} placeholder="i.e. Sacked Rome last Tuesday" onChange={this.handleCaptionChange} />

			<label htmlFor="ownerName">Owner Name</label>
			<input id="ownerName" className="form-control" placeholder="i.e. Kris Kristofferson" type="text" onChange={this.handleChange.bind(this, 'ownerName')} value={this.props.ownerName}/>

			<label htmlFor="email">Email</label>
			<input id="email" className="form-control" placeholder="i.e. Kris@Kristofferson.com" type="text" onChange={this.handleChange.bind(this, 'email')} value={this.props.email}/>

			</div>

			<div className="form-group" >
			<label htmlFor="terms">Terms and Conditions</label>

			<input id="terms" type="checkbox"/><p className="help-block">I agree to stuff</p>


			</div>



			<input type="submit" value="Save" className="btn"/>

			</form>
			</div>
			);
}
});

export default connect(mapStateToProps)(Memeform);
