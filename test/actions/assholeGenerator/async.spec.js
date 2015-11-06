import expect from 'expect';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as actionCreators from '../../../src/app/actions/assholeGenerator';
import * as types from '../../../src/app/constants/ActionTypes';

import FileReader from 'filereader';
import sinon from 'sinon';

import { SyntheticEvent } from 'react';

const middlewares = [thunk];

/**
 * Creates a mock of Redux store with middleware.
 */
function mockStore(getState, expectedActions, done) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.');
  }
  if (typeof done !== 'undefined' && typeof done !== 'function') {
    throw new Error('done should either be undefined or function.');
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ?
          getState() :
          getState;
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift();

        try {
          expect(action).toEqual(expectedAction);
          if (done && !expectedActions.length) {
            done();
          }
          return action;
        } catch (e) {
          done(e);
        }
      }
    }
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware);

  return mockStoreWithMiddleware();
}

function Event(suffix) {}
function Image(){}

describe('async actions', () => {
  afterEach(() => {
    // nock.cleanAll();
  });

  it('creates  when fetching todos has been done', (done) => {
  	let fakeNativeEvent = new Event();
  	let d = new Date();

  	let mockEvent = {
  		target: {
  			files: [
  				{
  					lastModified: null,
  					lastModifiedDate: d,
  					name: "FileName.jpg",
  					size: 100,
  					type: "image/jpg",
  					webkitRelativePath: ""
  				}
  			]
  		}
  	};

  	let mockReader = new FileReader();
  	sinon.stub(mockReader, 'readAsDataURL', function(file){
  		console.log('in readAsDataURL');
  		mockReader.onload({target: {
  			result: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQPDw8PDxQUDw8PFA8UDw0PFBQPDw8PFBQWFhQUFBQYHCggGBolHBQUITEhJSkrLi4uFx8zODMsNygtLisBCgoKDAwMFA0MFCwZFBwsLCwsLCwsLCwsLCw3LCw3LCw3LCwsLDc3KywsNyw3Nyw3LDcsNzc3KywsNzc3LDcsLP/AABEIAMIBAwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERUQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOHgIoqKABAAAAADQgCwIAoCpFIqDOKGKiCxRUFqIiosASo0kUTCxUoCLiAYKAyogAtAAQFRQBFAAAFiKAABFF1FRFFCQFiCClAiYsS0RKYEVQqgjJIoCYooMAYAAABAU1AFAAABQAABRdZaogIqKCKAICNJRKoU1AVVQggBgCoAyqAACgAgAAAAKRNBSBAURRQRRARQBFBcRYgAgAFAMUSAqAArKgyqKqAICoAKICqQEFQANVFAqlARdCwBNVAFlTDAXRMXAEEBSIsBWWmcAWKgKMgiKgoCoKACCoAoIKoioCooLRDQVABRAF01AF0iAAgA1GW/NBEKAQRQZFAQBUAAAAAAAAVABRBFaGVBRAFghoCxCAqBQEBRVSLqB1NBQAQAAQBUAAAAAAAAAAAAABRQAAQRYiqFRUEAAUXURQEVBQFQUBABAAAAAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAABAAIAAAAAAAD/2Q=='
  		}});
  	}); 
//{ type: types.UPDATE_IMAGE_PATH, path: path }
//{ type: types.IMAGE_LOAD_SUCCESS,   // eventually
    const expectedActions = [
      { type: types.UPDATE_IMAGE_PATH, path: {
  					lastModified: null,
  					lastModifiedDate: d,
  					name: "FileName.jpg",
  					size: 100,
  					type: "image/jpg",
  					webkitRelativePath: ""
  				} },
      { type: types.IMAGE_LOAD_SUCCESS }
    ]
    const store = mockStore({ todos: [] }, expectedActions, done);
    store.dispatch(actionCreators.readImage(mockEvent, mockReader));
    done();
  });
});