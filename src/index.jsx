

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
// import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

require('es6-promise').polyfill();


// const socket = io(`${location.protocol}//${location.hostname}:8090`);
const socket = io('https://slack-leaderboards.herokuapp.com/socket.io/');

socket.on('connection', function(data){
    console.log('Connected', data);
});



import configureStore from './stores/configureStore';
import Root from './components/Root';
import ScoreBoard from './components/scoreboard/scoreboard';






const store = configureStore();

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



