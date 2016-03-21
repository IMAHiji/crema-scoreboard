import {combineReducers} from 'redux';
import {REQUEST_SLACKLETES, RECEIVE_SLACKLETES} from '../actions/ScoreboardActions';

const initialState = {
    isFetching:false,
    slackletes:[]
}


function slackletes(state=initialState, action){
    switch(action.type){

        case REQUEST_SLACKLETES:
            
            return Object.assign({}, state, {
                isFetching:true
            });
        case RECEIVE_SLACKLETES:

            return Object.assign({}, state, {
                isFetching:false,
                slackletes:action.slackletes
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    slackletes
});
export default rootReducer
