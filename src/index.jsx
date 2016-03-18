import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {Map, List} from 'immutable';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';



import configureStore from './stores/configureStore';

import Root from './components/Root';
import ScoreBoard from './components/scoreboard/scoreboard';






const store = configureStore();
console.log('Index');
const routes =
    <Route component={Root}>
        <Route path="/" component={ScoreBoard}  />
    </Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);



