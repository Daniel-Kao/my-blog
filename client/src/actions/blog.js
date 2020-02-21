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

export const createBlog = params => async dispatch => {
  console.log(params);
  const response = await axios.post(`/blogs/`, {
    title: '123',
    content: 'halalal'
  });
  dispatch({
    type: types.BLOG_CREATED,
    payload: response.data.data
  });
};
