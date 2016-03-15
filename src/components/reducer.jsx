import {Map, List} from 'immutable';



function getSlackletes(state, newState){
    return Object.assign({}, state, newState);

}


export default function(state = Map(), action){
    switch(action.type) {
        case 'GET_SLACKLETES':
            console.log('Set State Case fired, ',action.state);
            return getSlackletes(state, action.state);
    }
    return state;
}
