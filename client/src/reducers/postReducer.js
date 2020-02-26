import _ from 'lodash';
import {
    FETCH_POST,
    FETCH_POSTS,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST
} from '../actions/type';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, [action.payload.id]: action.payload};
        case FETCH_POSTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case CREATE_POST:
            return { ...state, [action.payload.id]: action.payload};
        case UPDATE_POST:
            return { ...state, [action.payload.id]: action.payload};
        case DELETE_POST: 
            return _.omit(state, action.payload);
        default: 
            return state;
    }
};

// return (
//     Object.keys(state).filter(key => key != action.payload)
//     .reduce((obj, key) => {
//     return {
//     ...obj, [key]: state[key]
//     }
// }, {}), action.payload);