import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {Map, List} from 'immutable';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';



import {loadSlackletes} from './actions/ScoreboardActions';
import reducer from './components/reducer';

import App from './components/app';
import {ScoreBoardContainer} from './components/scoreboard/scoreboard';
//import {SlackLeteContainer} from './components/slackLete/slackLete';

//const data = [
//    {
//        _id: "560efc7e3bc36511004b08b7",
//        slack_id: "U024F579Z",
//        name: "Ross Brown",
//        __v: 0,
//        score: 1544
//    },
//    {
//        _id: "560eff287924201100df7dcd",
//        slack_id: "U024F57B1",
//        name: "Rob LaFeve",
//        __v: 0,
//        score: 186
//    },
//    {
//        _id: "56128611528fae11004a3de2",
//        slack_id: "U04U4D00X",
//        name: "Paul McCarty",
//        __v: 0,
//        score: 2035
//    },
//    {
//        _id: "5612ed27f4aa9d11004c4f3d",
//        slack_id: "U02JLD2D3",
//        name: "Deric Mendez",
//        __v: 0,
//        score: 488
//    },
//    {
//        _id: "5613ca87f4aa9d11004c4f40",
//        slack_id: "U03Q79Y0T",
//        name: "Eric Hurst",
//        __v: 0,
//        score: 838
//    },
//    {
//        _id: "5613ec9b5006f31100390ad1",
//        slack_id: "U04DY9FQD",
//        name: "Matt Cole",
//        __v: 0,
//        score: 155
//    },
//    {
//        _id: "5613ed545006f31100390ad3",
//        slack_id: "U06M60S82",
//        name: "Luke Askins",
//        __v: 0,
//        score: 538
//    },
//    {
//        _id: "56155ad46e035d1100ca2b5f",
//        slack_id: "U087RFHV2",
//        name: "Laura Artman",
//        __v: 0,
//        score: 2317
//    },
//    {
//        _id: "56158228a1026111003fe49e",
//        slack_id: "U0BLY0SAG",
//        name: "Carlforth Bottington III",
//        __v: 0,
//        score: 100
//    },
//    {
//        _id: "561692fc88a65b1100f4b458",
//        slack_id: "U024ST66A",
//        name: "Matt Bishop",
//        __v: 0,
//        score: 0
//    },
//    {
//        _id: "56169e4b88a65b1100f4b459",
//        slack_id: "U054DM22S",
//        name: "Kaley Ide",
//        __v: 0,
//        score: 136
//    },
//    {
//        _id: "561800fc41de1c11003cea74",
//        slack_id: "U0BEN42CR",
//        name: "Alexa Huston",
//        __v: 0,
//        score: 152
//    },
//    {
//        _id: "5618010741de1c11003cea75",
//        slack_id: "U024F4S48",
//        name: "George Brooks",
//        __v: 0,
//        score: 1243
//    },
//    {
//        _id: "561d133accd3a51100f7ff36",
//        slack_id: "U02T5TSU1",
//        name: "Nate",
//        __v: 0,
//        score: 122
//    },
//    {
//        _id: "561d26ceccd3a51100f7ff37",
//        slack_id: "U024F57BR",
//        name: "Daniel Linhart",
//        __v: 0,
//        score: 647
//    },
//    {
//        _id: "561d2917ccd3a51100f7ff38",
//        slack_id: "U08SW19CP",
//        name: "Cam Baraban",
//        __v: 0,
//        score: 318
//    },
//    {
//        _id: "561ec20e40635b1100866a15",
//        slack_id: "U024F57FP",
//        name: "Michael Luchen",
//        __v: 0,
//        score: 237
//    },
//    {
//        _id: "562e9c037fffe411004dda08",
//        slack_id: "U0ALD1FGB",
//        name: "Mitch Killian",
//        __v: 0,
//        score: 13
//    },
//    {
//        _id: "562fa1b97fffe411004dda09",
//        slack_id: "U054FMDV0",
//        name: "Justin Haddock",
//        __v: 0,
//        score: 0
//    },
//    {
//        _id: "5665ed76ac5fb611005c4d47",
//        slack_id: "U0F75TT3N",
//        name: "Scotty Moon",
//        __v: 0,
//        score: 1063
//    },
//    {
//        _id: "5671cbb2221bf3110008b427",
//        slack_id: "U0GF0RHEU",
//        name: "Alex Benson",
//        __v: 0,
//        score: 721
//    },
//    {
//        _id: "56a63cedc2ccac110024bc3b",
//        slack_id: "U0JRN1F4J",
//        name: "Chris Walter",
//        __v: 0,
//        score: 412
//    },
//    {
//        _id: "56b4b954ea24f41100ea6f2f",
//        slack_id: "U0KAHAFFH",
//        name: "Neal Dyrkacz",
//        __v: 0,
//        score: 135
//    }
//];

var data = [];

const store = createStore(reducer);

console.log('initial state', store.getState());
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);



fetch('https://slack-leaderboards.herokuapp.com/scores')
    .then(
        function(response){
            if(response.status >=400){
                throw new Error("Bad Response from server");
            }
            return response.json()
    })
    .then(function(slacklesteObject){
        console.log('FROM SERVER', slacklesteObject);
        return data = slacklesteObject;
    })
    .then(function(data){
        store.dispatch(loadSlackletes(data));
    });





console.log('loaded state', store.getState());
unsubscribe();
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



