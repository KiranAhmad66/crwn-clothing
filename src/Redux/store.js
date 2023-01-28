import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
const reducer = rootReducer;

const middleware = [logger];
const store = configureStore({
  reducer,
  middleware: [...middleware],
});
export default store;
