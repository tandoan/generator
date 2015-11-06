import * as types from '../constants/ActionTypes';

export function getInitialDate() {
    return { type: types.GET_INITIAL_DATE };
}

export function updateImagePath(path) {
	return { type: types.UPDATE_IMAGE_PATH, path: path };
}

export function readImage(event, reader){
    let f = (dispatch, getState) => {
        var file = event.target.files[0];
        dispatch(updateImagePath(file))

        reader.onload = function(upload){
            dispatch(imageRead(dispatch,getState, upload))
        };
        return reader.readAsDataURL(file); 
    }
    return f;

}

export function imageRead(dispatch, getState, upload){
	return function(dispatch,getState){
		var img = new Image();

        img.onload = function(){
        	dispatch(imageLoaded(img, getState));
        }
        img.src = upload.target.result;
        return img;
    }
}

export function imageLoaded(img, getState){

	var currentState = getState().generator;
	var zoomRatio = null;

    if(img.naturalHeight >= img.naturalWidth) {
        zoomRatio = currentState.heroStyle.height / img.naturalHeight;
    } else {
        zoomRatio = currentState.heroStyle.width / img.naturalWidth;
    }

    return { type: types.IMAGE_LOAD_SUCCESS,
    	dataUri: img.src,
    	zoomRatio: zoomRatio,
    	origZoomRatio: zoomRatio,
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