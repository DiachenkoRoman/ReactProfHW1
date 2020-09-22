import {GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE} from "../../constants/users";


const getUsersRequests = () =>({
        type: GET_USERS_REQUEST,
});

const getUsersSuccess = (payload) =>({
        type: GET_USERS_SUCCESS,
        payload
});

const getUsersFailure = (payload) =>({
        type: GET_USERS_FAILURE,
        payload
});

export const getUsers = () =>{
       return async (dispatch) =>{
               try {
                       dispatch(getUsersRequests());
                       const data = await fetch("https://jsonplaceholder.typicode.com/users")
                       const users = await data.json();
                       dispatch(getUsersSuccess(users))
               } catch (e) {
                        dispatch(getUsersFailure(e))
               }


       }
}
