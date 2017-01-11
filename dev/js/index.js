import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/App';
import About from './components/About';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Detail from './components/Detail';

import '../scss/style.scss';

const store = createStore(allReducers);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}> 
    		<Route path="/" component={App} />
    		<Route path="/about" component={About} />
    		<Route path="/detail/:id" component={Detail} />
    	</Router>
    </Provider>,
    document.getElementById('root')
);
