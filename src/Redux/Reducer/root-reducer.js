import { combineReducers } from "redux";
import studentReducer from "./reducer";

const rootreducer = combineReducers({
  students: studentReducer,
});

export default rootreducer;
