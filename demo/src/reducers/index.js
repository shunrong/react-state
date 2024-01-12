// import { combineReducers } from "redux";
import { combineReducers } from "@elime/redux";
import * as countReducer from "./countReducer";
import * as inputReducer from "./inputReducer";
import * as todosReducer from "./todosReducer";
import * as roomsReducer from "./roomsReducer";

const rootReducer = combineReducers({
  ...countReducer,
  ...inputReducer,
  ...todosReducer,
  ...roomsReducer
});

export default rootReducer;
