import { combineReducers } from "redux";
import blogReducer from "./blog";

export default combineReducers({
  blog: blogReducer
});
