import { combineReducers } from "redux";
import { homeReducer } from "./HomeReducer";

const rootReducer = combineReducers({
  homereducer: homeReducer,
});

export default rootReducer;
