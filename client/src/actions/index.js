import axios from 'axios';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_POST,
    DELETE_POST,
    UPDATE_POST,
    FETCH_POST,
    FETCH_POSTS,
} from './type';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};


export const createPost = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await axios.post('/posts', { ...formValues, userId });
    // console.log(response.data);
    

    dispatch({ type: CREATE_POST, payload: response.data });
    history.push('/posts');
}

export const fetchPosts = () => async dispatch => {
    const response = await axios.get('/posts');

    dispatch({ type: FETCH_POSTS, payload: response.data.posts });
    // console.log(response.data);

}

export const fetchPost = (id) => async dispatch => {
    const response = await axios.get(`/post/${id}`);
    // console.log(response.data.post[0]);

    dispatch({ type: FETCH_POST, payload: response.data.post[0]});
};

export const editPost = (id, formValues) => async dispatch => {
    const response = await axios.patch(`/posts/${id}`, formValues);
    // console.log(response);

    dispatch({ type: UPDATE_POST, payload: response.data});
    history.push('/posts');
}

export const deletePost = (id) => async dispatch => {
    await axios.delete(`/posts/${id}`);

    dispatch({type: DELETE_POST, payload: id});
    history.push('/posts');
};