import { createStore, combineReducers, applyMiddleware } from "redux";
import flowersReducer from "./flowers/reducers";
import "bootstrap/dist/css/bootstrap.min.css";

import thunk from "redux-thunk";
import logger from "redux-logger";

//create a property of the store state called combining both reducers
const rootReducer = combineReducers({
  flowers: flowersReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
