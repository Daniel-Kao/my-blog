import axios from "axios";
import types from "./types.js";

export const getBlogs = () => async (dispatch, getState) => {
  const response = await axios.get("/blogs");
  dispatch({
    type: types.STORE_BLOGS,
    payload: response.data
  });
};
