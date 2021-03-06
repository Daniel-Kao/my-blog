import axios from 'axios';
import types from './types.js';

export const getBlogs = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:5000/blogs/all');
    dispatch({
      type: types.STORE_BLOGS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBlogById = id => async dispatch => {
  const response = await axios.get(`/blogs/${id}`);
  dispatch({
    type: types.STORE_ONE_BLOG,
    payload: response.data.data
  });
};

export const createBlog = ({ title, content }) => async dispatch => {
  const response = await axios.post(`/blogs/`, {
    title,
    content
  });
  dispatch({
    type: types.BLOG_CREATED,
    payload: response.data.data
  });
};
