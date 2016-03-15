import {Map} from 'immutable';


function setState(state, newState){
    return state.merge(newState);

}


export default function(state = Map(), action){
    switch(action.type) {
        case 'SET_STATE':
            console.log('Set State Case fired, ',action.state);
            return setState(state, action.state);
    }
    return state;
}
