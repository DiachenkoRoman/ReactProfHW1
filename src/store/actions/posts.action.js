import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from "../../constants/posts";

const getPostsRequest = () =>({
    type: GET_POSTS_REQUEST
});

const getPostsSuccess = (payload) =>({
    type: GET_POSTS_SUCCESS,
    payload
});

const getPostsFailure = (payload) =>({
    type: GET_POSTS_FAILURE,
    payload
});

export const getPosts = () =>{
    return async (dispatch) => {
        try {
            dispatch(getPostsRequest());
            const data = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await data.json();
            dispatch(getPostsSuccess(posts));
        } catch (e) {
            dispatch(getPostsFailure(e))
        }
    }
}
