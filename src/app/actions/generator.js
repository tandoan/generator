import * as types from '../constants/ActionTypes';

export function setErrors(errors){
    return { type: types.SET_ERRORS, errors: errors};
}

export function savingStart(){
    return { type: types.SAVING_START };
}
export function savingDone(){
    return { type: types.SAVING_DONE };
}

export function setSaveStatus(status){
    return { type: status };
}

export function getInitialDate() {
    return { type: types.GET_INITIAL_DATE };
}

export function updateImagePath(path) {
	return { type: types.UPDATE_IMAGE_PATH, path: path };
}

export function readImage(event, reader){
    let f = (dispatch, getState) => {
        let file = event.target.files[0];
        dispatch(updateImagePath(file));

        reader.onload = function(upload){
            dispatch(imageRead(dispatch,getState, upload))
        };
        return reader.readAsDataURL(file); 
    }
    return f;

}

export function imageRead(dispatch, getState, upload){
	return function(dispatch,getState){
		let img = new Image();

        img.onload = function(){
        	dispatch(imageLoaded(img, getState));
        }
        img.src = upload.target.result;
        return img;
    }
}

export function imageLoaded(img, getState){

	let currentState = getState().generator;
	let zoomRatio = null;

    if(img.naturalHeight >= img.naturalWidth) {
        zoomRatio = currentState.defaultHeroStyle.height / img.naturalHeight;
    } else {
        zoomRatio = currentState.defaultHeroStyle.width / img.naturalWidth;
    }

    return { type: types.IMAGE_LOAD_SUCCESS,
    	dataUri: img.src,
    	zoomRatio: zoomRatio,
    	origZoomRatio: zoomRatio,
        heroStyle: {
            height: img.naturalHeight * zoomRatio,
            width: img.naturalWidth * zoomRatio
        },
    	naturalImageDimensions: {
    		height: img.naturalHeight,
    		width: img.naturalWidth
    	}
    };
}

export function rotateImage(direction) {
	return { type: types.ROTATE_IMAGE, direction: direction };
}

export function zoomInImage(){
	return { type: types.ZOOM_IN_IMAGE };
}

export function zoomOutImage(){
	return { type: types.ZOOM_OUT_IMAGE };
}

export function panImage(deltaX,deltaY){
	return { type: types.PAN_IMAGE, deltaX: deltaX, deltaY: deltaY };
}

export function updateCaption(text){
	return { type: types.UPDATE_CAPTION, text:text };
}

export function updateDate(unixTimestamp){
	return { type: types.UPDATE_DATE, unixTimestamp:unixTimestamp };
}

export function updateAssholeName(text){
	return { type: types.UPDATE_ASSHOLE_NAME, text:text };
}

export function updateOwnerName(text){
	return { type: types.UPDATE_OWNER_NAME, text:text };
}

export function updateEmail(text){
	return { type: types.UPDATE_EMAIL, text:text };
}

export function submitForm(){
    return { type: types.SUBMIT_INFO }
}

export function setFontSize(size){
    return { type: types.SET_FONT_SIZE, size:size }
}


