import { combineReducers } from "redux";
import commonReducer from "./common";
import collectReducer from "./collect";

export default combineReducers({
  common: commonReducer,
  collect: collectReducer,
});
