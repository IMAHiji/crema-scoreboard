import {LOAD_SLACKLETES} from '../actions/ScoreboardActions';

//
//
//export default function(state=initialState, action ={}){
//    const{data, type} = action;
//
//    switch(type){
//        case 'SET_SLACKLETES':
//            const slackletes = data.slackletes ? data.slackletes:[];
//            return{
//
//                slackletes:slackletes.map((slacklete) => {
//                    return {
//                        id:slacklete._id,
//                        slack_id:slacklete.slack_id,
//                        name:slacklete.name,
//                        __v:slacklete.__v,
//                        score:slacklete.score
//                    }
//
//                })
//            }
//    }
//}


export default function setSlackletes(state = [], action){
    switch(action.type){
        case LOAD_SLACKLETES:
            return Object.assign({}, state, {
                slackletes:action.data
            })
        default:
            return state
    }
}


//export default function(state, action){
//    switch(action.type) {
//        case 'SET_SLACKLETES':
//            console.log('Set State Case fired, ',action.state);
//            return assignSlackletes(state, action.state);
//    }
//    return state;
//}
