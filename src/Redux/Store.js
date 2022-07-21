import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "./Reducer/root-reducer";

const middleares = [thunk];

if (process.env.NODE_ENV === "development") {
  middleares.push(logger);
}

const store = createStore(rootreducer, applyMiddleware(...middleares));

export default store;
