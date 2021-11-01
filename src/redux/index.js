import { combineReducers } from "redux";
import { HomeReducer } from "./HomeReducer";

const rootReducer = combineReducers({
  homereducer: HomeReducer,
});

export default rootReducer;
