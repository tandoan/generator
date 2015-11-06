'use strict ';

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { connect, Provider } from 'react-redux';
// import { Router, Route } from 'react-router';


// import App from './containers/App';
import Generator from './components/Generator';


const store = configureStore();


ReactDOM.render(
<Provider store={store}>
		<Generator store={store}/>
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
