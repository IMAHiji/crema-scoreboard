



require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

//const slackleteUri = 'https://slack-leaderboards.herokuapp.com/scores';

export const LOAD_SLACKLETES = 'LOAD_SLACKLETES'




export function loadSlackletes(data){
    console.log('ACTION LOAD_SLACKLETES FIRED', data);
    return {
        type:LOAD_SLACKLETES,
        data:data
    }
}



