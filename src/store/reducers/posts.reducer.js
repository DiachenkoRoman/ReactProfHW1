import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from "../../constants/posts";

const initialState = {
    loading: false,
    posts: null,
    errors: null
}

export const postsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        default : {
            return state
        }

    }
}
