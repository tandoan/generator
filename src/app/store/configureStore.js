import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import { reduxReactRouter } from 'redux-router';
import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

// import createLogger from 'redux-logger';
// const logger = createLogger;

import reducer from '../reducers';
let middleware = [thunk];

export default function configureStore(initialState){
	let configureStore;

	if (process.env.NODE_ENV === 'production') {
		configureStore = compose(
			applyMiddleware(...middleware),
			reduxReactRouter({
			    // routes,
			    createHistory
			  })
	// 		reduxReactRouter({ createHistory })
		)(createStore);
	} else {
		configureStore = compose(
			applyMiddleware(thunk),
			reduxReactRouter({
			    // routes,
			    createHistory
			  })
			// reduxReactRouter({ createHistory })
			,devTools()
		)(createStore);
	}

	const store = configureStore(reducer);
	if (module.hot) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('../reducers', () => {
    		const nextReducer = require('../reducers'); //    		store.replaceReducer(nextReducer);
	    });
	}


	return store;
}




