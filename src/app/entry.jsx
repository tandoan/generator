'use strict ';

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { connect, Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';


import App from './containers/App';
import Main from './components/Main';
import Generator from './components/Generator';


const store = configureStore();


ReactDOM.render(
<Provider store={store}>
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Main}/>
			<Route path="generator" component={Generator}/>
		</Route>
	</Router>
</Provider>
, document.getElementById('root')
);
// ReactDOM.render(

// <Provider store={store}>
// 	<Router>
// 		<Route path="/" component={App}/>
// 		<Route path="/generator" component={Generator}/>
// 	</Router>
// </Provider>
// , document.getElementById('root')
// )
