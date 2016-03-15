/*
* Action Types
*/


export const SET_STATE = 'SET_STATE';


/*
 * Other Constants
 */

/*
 * Action Creators
 */

export function setState(state){
    return{
        type:'SET_STATE',
        state
    };
}
