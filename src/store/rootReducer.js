import {combineReducers} from "redux";
import {usersReducer} from "./reducers/users.reducer";
import {postsReducer} from "./reducers/posts.reducer";

export const rootReducer = combineReducers({
    usersReducer,
    postsReducer
})
