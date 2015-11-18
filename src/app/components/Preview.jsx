import React, { Component } from 'react';
import { sprintf } from 'sprintf-js';
import moment from 'moment';
import { CAPTION_LIMITS } from '../constants/Settings';

require('./preview.css');

const displayName = 'Preview';
const propTypes = {};
const defaultProps = {
    assholeName: 'Twatwaffles',
    assholeBreed: 'Asshole',
    ownerLocation: '',
    caption: '',
    date: null,
    image: {
        dataUri:''
    },
    ownerName: 'Pathetic Fool',
    imageStyle: {
        position: 'absolute',
        left:0,
        top:0
    }
};

class Preview extends Component {

    getMeta(){ 
        const { generator } = this.props;
        return sprintf('%s (%s) - %s', generator.assholeName || 'Twatwaffles', generator.assholeBreed , generator.ownerName || 'Pathetic fool');
    }

	getDay(){
        return moment.unix(this.props.generator.date / 1000).format('D');
    }

    getDayName(){
        return moment.unix(this.props.generator.date / 1000).format('dddd');
    }

    getMonth(){
        return moment.unix(this.props.generator.date / 1000).format('MMMM');
    }

    getYear(){
        return moment.unix(this.props.generator.date / 1000).format('YYYY');
    }

    componentDidUpdate(nextProps){
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
    }

    render(){
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
}
Preview.displayName = displayName;
Preview.propTypes = propTypes;
Preview.defaultProps = defaultProps;

export default Preview;