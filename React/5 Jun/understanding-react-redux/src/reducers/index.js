import changeNumber from "./incrementDecrement";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,
});

export default rootReducer;
