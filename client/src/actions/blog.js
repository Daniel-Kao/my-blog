import axios from 'axios';
import types from './types.js';

export const getBlogs = () => async dispatch => {
  const response = await axios.get('/blogs');

  dispatch({
    type: types.STORE_BLOGS,
    payload: response.data
  });
};

export const getBlogById = id => async dispatch => {
  const response = await axios.get(`/blogs/${id}`);
  dispatch({
    type: types.STORE_ONE_BLOG,
    payload: response.data.data
  });
};
