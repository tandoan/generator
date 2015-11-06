import { combineReducers } from 'redux';
// import { routerStateReducer } from 'redux-router';
import generator from './generator';

const reducer = combineReducers({
  // router: routerStateReducer,
  generator: generator
});

export default reducer;

