import {
    FETCH_POST,
    FETCH_POSTS,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST
} from '../actions/type';

const initialState = {
    posts: [],
    post: null
}


export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_POST:
            return { 
                ...state, 
                post: payload
            };
        case FETCH_POSTS:
            return { 
                ...state, 
                posts: payload 
            };
        case CREATE_POST:
            return { 
                ...state, 
                posts: [...state.posts, payload]
            };
        case UPDATE_POST:
            return { 
                ...state, 
                posts: [...state.posts, payload]
            };
        case DELETE_POST: 
            return  {
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        default: 
            return state;
    }
};

