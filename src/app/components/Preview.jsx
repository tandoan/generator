import React from 'react';
import { sprintf } from 'sprintf-js';
import moment from 'moment';
import { CAPTION_LIMITS } from '../constants/Settings';

var css = require('./preview.css');

var Preview = React.createClass({
    displayName: 'Preview',

    // getDefaultProps: function() {
    // 	return {
    // 		assholeName: '',
    // 		assholeBreed: 'TwatFlalalala',
    // 		ownerLocation: '',
    // 		caption: '',
    // 		date: null,
    // 		image: {
    // 			dataUri:''
    // 		},
    // 		ownerName: '',
    // 		imageStyle: {
    // 			position: 'absolute',
    // 			left:0,
    // 			top:0,
    // 			height: '100%',
    // 			width: '100%'
    // 		}
    // 	};
    // },

    getMeta: function(){ 
        const { generator } = this.props;
        return sprintf("%s (%s) - %s", generator.assholeName || 'Twatwaffles', generator.assholeBreed , generator.ownerName || 'Pathetic fool');
    },
	getDay: function(){
    	var m = moment.unix(this.props.generator.date / 1000);
    	return m.format('D');
    },
    getDayName: function(){
    	var m = moment.unix(this.props.generator.date / 1000);
    	return m.format('dddd');
    },
    getMonth: function(){
    	var m = moment.unix(this.props.generator.date / 1000);
    	return m.format('MMMM');
    },
    getYear: function(){
    	var m = moment.unix(this.props.generator.date / 1000);
    	return m.format('YYYY');
    },


    componentDidUpdate: function(nextProps) {
        let newCaption = nextProps.generator.caption;
        let targetFontSize = CAPTION_LIMITS[0].fontSize; 

        // linear search for the font size based on length of text
        for(var i=0; i< CAPTION_LIMITS.length;i++){
            if(newCaption.length > CAPTION_LIMITS[i]['length']){
                targetFontSize = CAPTION_LIMITS[i].fontSize; 
            }
        }
        if(targetFontSize != this.props.generator.captionStyle.fontSize){
            this.props.actions.setFontSize(targetFontSize);
        }
    },

    render: function () {
        const { generator } = this.props;

        return (

        <div className="AssholeGenerator preview-container" >
            <div className="hero-container">
                <img src={generator.image.dataUri} style={generator.heroStyle}/>
            </div>
            <div className="text-container" >
                <div className="meta-text" >{this.getMeta()}</div>
                <div className="caption-container" >
                    <div className="caption-text" style={generator.captionStyle}>{generator.caption}</div>

                    <div className="date-container" >
                        <span className="day" >{this.getDay()}</span>
                        <span className="day-name before-dot" >{this.getDayName()}</span>
                        <span className="month-name before-dot" >{this.getMonth()}</span>
                        <span className="year" >{this.getYear()}</span>
                        <span className="logo" ></span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});

export default Preview;