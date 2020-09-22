import {createStore, applyMiddleware, compose} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";

const logger = createLogger({collapsed: true});
const createStoreWithMiddleWare = applyMiddleware(thunk, logger)
const store = createStore(rootReducer, compose(createStoreWithMiddleWare));

export default store
