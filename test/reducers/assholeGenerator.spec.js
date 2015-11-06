import expect from 'expect';
import assholeGenerator from '../../src/app/reducers/assholeGenerator';
import * as types from '../../src/app/constants/ActionTypes';

describe('assholeGenerator reducer', () => {
	it('should handle initial state', () => {
		expect( assholeGenerator(undefined, {}))
			.toEqual({
				charLimit: 530,
				filePath: '',
				assholeName: '', 
				email: '',
				ownerName: '',
				ownerLocation: '',
				caption: '',
				date: null,
				acceptTerms: false,
				image: {
					path: '',
					dataUri: '',
					height: null,
					width: null,
					posX: 0,
					posY: 0,
					rotation: 0,
					zoomRatio: 1,
					origZoomRatio:1
				},
				heroStyle: {
					background:''
				},
				naturalImageDimensions: {
					height: null,
					width: null
				}
			});
	});

	it('should update image path', () => {
		let newState = assholeGenerator(undefined,{ type: 'UPDATE_IMAGE_PATH', path: 'abc'});
		expect(newState.image.path).toEqual('abc');
	});


	it('should update caption', () => {
		let newState = assholeGenerator(undefined,{ type: 'UPDATE_CAPTION', text: 'a'});
		expect(newState.caption).toEqual('a');

		let newState2 = assholeGenerator(newState, { type: 'UPDATE_CAPTION', text: 'ab'}); 
		expect(newState2.caption).toEqual('ab');
	});


});