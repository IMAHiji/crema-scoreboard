import fetch from 'isomorphic-fetch'
import _ from 'lodash';
//const slackleteUri = 'https://slack-leaderboards.herokuapp.com/scores';



export const REQUEST_SLACKLETES = 'REQUEST_SLACKLETES';
export const UPDATE_SLACKLETES = 'UPDATE_SLACKLETES';
export const RECEIVE_SLACKLETES = 'RECEIVE_SLACKLETES';

export function requestSlackletes(){
    return{
        type:REQUEST_SLACKLETES,
        isFetching:true
    }
}


function sortSlackletes(json){
    return _.sortBy(json, function(num){
        return -num.score
    })
}

function receiveSlackletes(json){

    return{
        type:RECEIVE_SLACKLETES,
        slackletes:sortSlackletes(json),
        isFetching:false
    }
}

export function loadSlackletes(){
    return dispatch => {
        dispatch(requestSlackletes());
        return fetch('https://slack-leaderboards.herokuapp.com/scores')
            .then(req=>req.json())
            .then(json => dispatch(receiveSlackletes(json)))
    }
}

function shouldFetchSlackletes(state){
    const slackletes = state.slackletes;
    if(slackletes.length===0){
        return true;
    }else if(state.isFetching){
        return false;
    }else{
        return true
    }
}



export function fetchSlackletesifNeeded(){
    return (dispatch, getState) => {
        if(shouldFetchSlackletes(getState())){
            return dispatch(loadSlackletes())
        }
    }
}

