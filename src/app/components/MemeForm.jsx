import React from 'react';
var DateTimeField = require('react-bootstrap-datetimepicker');
import { readImage, updateCaption } from '../actions/generator';



var MemeForm = React.createClass({
	handldleSubmit: function(event){
		event.preventDefault();
		console.log('submitting')
	},
	handleFile: function(event){
		return this.props.actions.readImage(event, new FileReader());
	},
	handlePan: function(direction, event){
		let deltaX = 0;
		let deltaY = 0;
		let panDelta = 10;
        switch(direction){
            case 'U':
            	deltaY -= panDelta;
            break;
            case 'D':
            	deltaY += panDelta;
            break;
            case 'L':
            	deltaX -= panDelta;
            break;
            case 'R':
            	deltaX += panDelta;
            break;       
        }
		return this.props.actions.panImage(deltaX, deltaY);
	},
	zoomIn: function(event){
		return this.props.actions.zoomInImage();
	},
	zoomOut: function(event){
		return this.props.actions.zoomOutImage();
	},
	handleRotate: function(direction,event){
		return this.props.actions.rotateImage(direction);
	},
	handleDateChange: function(input){
		return this.props.actions.updateDate(input);

	},
	handleChange: function(field,event){
		switch(field){
			case 'assholeName':
				return this.props.actions.updateAssholeName(event.target.value);
			case 'ownerName':
				return this.props.actions.updateOwnerName(event.target.value);
			case 'email':
				return this.props.actions.updateEmail(event.target.value);
		}
	},


	handleCaptionChange: function(event){
		this.props.actions.updateCaption( event.target.value);
	},

	// propTypes: {
	// 	assholeName: React.PropTypes.string.isRequired,
	// 	ownerName: React.PropTypes.string.isRequired,
	// 	email: React.PropTypes.string.isRequired,
	// 	charLimit: React.PropTypes.number.isRequired,
	// 	caption: React.PropTypes.string.isRequired
	// },
	// getDefaultProps: function() {
	// 	return {
	// 		assholeName: '',
	// 		ownerName: '',
	// 		email: '',
	// 		charLimit: 530,
	// 		caption: ''	
	// 	};
	// },
	render: function () {
		const { generator, actions } = this.props;
		
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
						<input id="assholeName" className="form-control" placeholder="i.e. Twatwaffles" type="text" onChange={this.handleChange.bind(this, 'assholeName')} value={generator.assholeName}/>
					</div>

					<div className="form-group">
						<label htmlFor="captionInput">Why Are They An Asshole?</label>
						<small style={{float:'right'}} className={ (generator.caption.length < 500)? 'bg-success' : (generator.caption.length < 520 ) ? 'bg-warning': 'bg-danger'  }>({generator.caption.length} of {generator.charLimit})</small>
						<textarea id="captionInput" className="form-control caption-input" value={generator.caption} placeholder="i.e. Sacked Rome last Tuesday" onChange={this.handleCaptionChange} />
					</div>

					<div className="form-group">
						<label htmlFor="ownerName">Owner Name</label>
						<input id="ownerName" className="form-control" placeholder="i.e. Kris Kristofferson" type="text" onChange={this.handleChange.bind(this, 'ownerName')} value={generator.ownerName}/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input id="email" className="form-control" placeholder="i.e. Kris@Kristofferson.com" type="text" onChange={this.handleChange.bind(this, 'email')} value={generator.email}/>
					</div>



					<input type="button" value="Save" className="btn"/>

				</form>
			</div>
			);
}
});

export default MemeForm;
