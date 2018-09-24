import {FETCH_POSTS, ADD_POST} from '../actions/types';

const initState = {
    items: [],
    item: {}
};

//evaluate what type of actions are dealing with
export default function(state = initState, action){
    switch (action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}