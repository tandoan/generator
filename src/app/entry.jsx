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
import Viewer from './components/Viewer';

const store = configureStore();


ReactDOM.render(
<Provider store={store}>
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Main}/>
			<Route path="generator" component={Generator}/>
			<Route path="view-page/:id" component={Viewer}/>
		</Route>
	</Router>
</Provider>
, document.getElementById('root')
);
