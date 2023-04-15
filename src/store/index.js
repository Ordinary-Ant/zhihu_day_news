import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise";
import reducer from "./reducer";

const middleware = [thunk, promise],
  env = process.env.NODE_ENV;
if (env === "development") {
  middleware.push(logger);
}

export default createStore(reducer, applyMiddleware(...middleware));
