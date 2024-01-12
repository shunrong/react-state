import { applyMiddleware, createStore } from "@elime/redux";
import thunk from "@elime/redux-thunk";
import logger from "@elime/redux-logger";
import rootReducer from "./reducers";

const store = createStore(rootReducer, {}, applyMiddleware(...[logger, thunk]));

export default store;
