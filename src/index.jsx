import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory} from 'react-router';
import io from 'socket.io-client';
import {Map, List} from 'immutable';

import App from './components/app';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

import Scoreboard from './components/scoreboard/scoreboard';
//import {SlackLeteContainer} from './components/slackLete/slackLete';






const routes =
    <Route component={App}>
        <Route path="/" component={Scoreboard}  />
    </Route>;

ReactDOM.render(
    <Router history={browserHistory} children={routes} />,
    document.getElementById('app')
);



