import { UPDATE_IMAGE_PATH, ROTATE_IMAGE, ZOOM_IN_IMAGE,
	ZOOM_OUT_IMAGE,
	PAN_IMAGE,
	UPDATE_CAPTION,
	UPDATE_DATE,
	UPDATE_ASSHOLE_NAME,
	UPDATE_OWNER_NAME,
	UPDATE_LOCATION,
	UPDATE_EMAIL,
	UPDATE_TERMS,
	SUBMIT_INFO,
	IMAGE_LOAD_SUCCESS,
	GET_INITIAL_DATE,
	SET_FONT_SIZE,
	SAVING_START,
	SAVING_DONE,
	SAVE_SUCCESS,
	SAVE_FAIL,
	SET_ERRORS
} from '../constants/ActionTypes';

import { sprintf } from 'sprintf-js';
import moment from 'moment';

const initialState = {
	errors: [],
	charLimit: 530,
	filePath: '',
	assholeName: '',
	assholeBreed: 'Asshole',
	email: '',
	ownerName: '',
	caption: '',
	date: null,
	image: {
		path: '',
		dataUri: '',
		rotation: 0,
		zoomRatio: 1,
		origZoomRatio:1
	},
	defaultHeroStyle: {
		height: 400,
		width:600
	},
	heroStyle: {
		background:'',
		height: 400,
		width: 600,
		overflow: 'hidden',
		position: 'relative',
		top:0,
		left:0,
		msTransform: '',
		WebkitTransform: '',
		transform: '',
    	// background:'',
     //    borderBottom:'2px solid #FFAF2B',
     //    backgroundSize: '100% 100%'
     
 },
 naturalImageDimensions: {
 	height: null,
 	width: null
 },
 captionStyle: {
 	fontSize: 36	
 },
 saveStatus: {
 	isSaving: false,
 	success: null
 }
}

function makeZoomState(stateCopy, zoomRatio){
	let newImage = Object.assign({},stateCopy.image, {
		zoomRatio: zoomRatio
	})
	let newHeroStyle = Object.assign({}, stateCopy.heroStyle, {
		height: stateCopy.naturalImageDimensions.height*zoomRatio,	
		width: stateCopy.naturalImageDimensions.width*zoomRatio	
	})

	return Object.assign({}, stateCopy, {image: newImage}, {heroStyle: newHeroStyle});
}

function calculateZoomOutState(state){
	return makeZoomState( Object.assign({}, state), calculateZoomOut(state));
}

function calculateZoomInState(state){
	return makeZoomState( Object.assign({}, state), calculateZoomIn(state));
}

function calculateZoomIn(state){
	return state.image.zoomRatio + ( state.image.origZoomRatio * 0.05);
}

function calculateZoomOut(state){ 
	return state.image.zoomRatio - ( state.image.origZoomRatio * 0.05);
}

export default function generator(state = initialState, action){
	switch (action.type){

		case SET_ERRORS:
		return Object.assign({}, state, {
			errors: action.errors
		});

		case GET_INITIAL_DATE: 

		return Object.assign({}, state, {
			date:  moment().format('x')
		});

		case UPDATE_IMAGE_PATH: 
		return Object.assign({}, state, {
			image: Object.assign({},state.image, { path: action.path})
		}
		);


		case IMAGE_LOAD_SUCCESS:
		return Object.assign({}, state, {
			image: Object.assign({}, state.image, {
				dataUri: action.dataUri,
				zoomRatio: action.zoomRatio,
				origZoomRatio: action.origZoomRatio	
			}),
			heroStyle: Object.assign({}, state.heroStyle, action.heroStyle),
			naturalImageDimensions: action.naturalImageDimensions
		});

		case ROTATE_IMAGE:
		let rotationAmount = ((action.direction === 'CW')? state.image.rotation+90:state.image.rotation-90)%360;
		let transformStyle =  sprintf('rotate(%sdeg)',rotationAmount);

		return Object.assign({}, state, {
			image: Object.assign({},state.image, {
				rotation: rotationAmount 
			}),
			heroStyle: Object.assign({}, state.heroStyle, {
				transform: transformStyle,
				WebkitTransform: transformStyle,
				msTransform: transformStyle,
			})
		});
		case ZOOM_IN_IMAGE:
		return calculateZoomInState(state);

		case ZOOM_OUT_IMAGE:
		return calculateZoomOutState(state);

		case PAN_IMAGE:
		return  Object.assign({}, state, {
			heroStyle: Object.assign({}, state.heroStyle, {
				left: action.deltaX + state.heroStyle.left,
				top: action.deltaY + state.heroStyle.top
			})
		});

		case UPDATE_CAPTION:
		if(action.text.length <= state.charLimit) {
			return Object.assign({}, state, {
				caption: action.text
			});
		}
		return state;

		case UPDATE_DATE:
		return Object.assign({},state,{
			date: action.unixTimestamp,
		});

		case UPDATE_ASSHOLE_NAME:
		return Object.assign({}, state, {
			assholeName: action.text
		})

		case UPDATE_OWNER_NAME:
		return Object.assign({}, state, {
			ownerName: action.text
		})

		case UPDATE_LOCATION:
		return Object.assign({}, state, {
			location: action.text
		})
		case UPDATE_EMAIL:
		return Object.assign({}, state, {
			email: action.text
		});

		case SET_FONT_SIZE:
		return Object.assign({}, state, {
			captionStyle: Object.assign({}, state.captionStyle, {
				fontSize: action.size
			})
		})

		case SAVING_START:
		return Object.assign({}, state, {
			saveStatus: Object.assign({}, state.saveStatus, {
				isSaving: true
			})
		})

		case SAVING_DONE:
		return Object.assign({}, state, {
			saveStatus: Object.assign({}, state.saveStatus, {
				isSaving: false
			})
		})

		case SAVE_SUCCESS:
		return Object.assign({}, state, {
			saveStatus: Object.assign({}, state.saveStatus, {
				success: true
			})
		})

		case SAVE_FAIL:
		return Object.assign({}, state, {
			saveStatus: Object.assign({}, state.saveStatus, {
				success: false
			})
		})

		default:
		return state;
	}
}