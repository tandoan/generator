import React, { Component } from 'react';

const displayName = 'Viewer';
const propTypes = {};
const defaultProps = {};

class Viewer extends Component {

	getUrl(id){
		return '/ugc/images/' + this.props.params.id + '.jpg';
	}

    render(){
        return (
            <div className="AssholeGenerator viewer-container">
            	<h1>Image: {this.props.params.id}</h1>
                <img src={this.getUrl(this.props.params.id)}/>
            </div>
        );
    }
}
Viewer.displayName = displayName;
Viewer.propTypes = propTypes;
Viewer.defaultProps = defaultProps;

export default Viewer;