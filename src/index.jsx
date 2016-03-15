import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {Map, List} from 'immutable';


import {setState} from './components/action_creators';
import reducer from './components/reducer';

import App from './components/app';
import {ScoreBoardContainer} from './components/scoreboard/scoreboard';
import {SlackLeteContainer} from './components/slackLete/slackLete';



const store = createStore(reducer);
store.dispatch({
    type:'SET_STATE',
    state:{
        message:"Hello There from State",
        OtherMessage: "This is another message from state"
    }
});

const routes =
    <Route component={App}>
        <Route path="/" component={ScoreBoardContainer}  />
        <Route path="/slacklete" component={SlackLeteContainer}  />
    </Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);



