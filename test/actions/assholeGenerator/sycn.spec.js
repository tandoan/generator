import expect from 'expect';
import * as actionCreators from '../../../src/app/actions/assholeGenerator';
import * as types from '../../../src/app/constants/ActionTypes';

describe('assholeGenerator actions', () => {
	it('should create GET_INITIAL_DATE action', () => {
		expect( actionCreators.getInitialDate())
		.toEqual({
			type: types.GET_INITIAL_DATE 

		});
	});

	it('should create UPDATE_IMAGE_PATH action', () => {
		expect( actionCreators.updateImagePath({pathObj: {}}))
		.toEqual({
			type: types.UPDATE_IMAGE_PATH,
			path: {pathObj:{}} 
		});
	});

});