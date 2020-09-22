import {GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE} from "../../constants/users";


const initialState = {
    loading: false,
    users: null,
    errors: null
}

export const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_USERS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        default: {
            return state;
        }

    }
}
