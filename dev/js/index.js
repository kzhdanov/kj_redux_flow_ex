import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/App';
import About from './components/About';
import { Router, Route, hashHistory } from 'react-router';

import '../scss/style.scss';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}> 
    		<Route path="/" component={App} />
    		<Route path="/about" component={About} />
    	</Router>
    </Provider>,
    document.getElementById('root')
);
