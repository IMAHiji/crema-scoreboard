import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {Map, List} from 'immutable';
import slackletes from './dummyScores';


import {setState} from './components/action_creators';
import reducer from './components/reducer';

import App from './components/app';
import {ScoreBoardContainer} from './components/scoreboard/scoreboard';
import {SlackLeteContainer} from './components/slackLete/slackLete';



const store = createStore(reducer);
store.dispatch({
    type:'GET_SLACKLETES',
    state:{
        slackletes:slackletes
    }
});

const routes =
    <Route component={App}>
        <Route path="/" component={ScoreBoardContainer}  />
    </Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);



