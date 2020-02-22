import types from '../actions/types.js';

export const blog = {
  list: {},
  article: {},
  timestamp: {}
};

export const blogReducer = (state = blog, action) => {
  switch (action.type) {
    case types.STORE_BLOGS:
      return {
        ...state,
        article: action.payload,
        timestamp: action.payload.timestamp
      };
    case types.STORE_ONE_BLOG:
      return {
        ...state,
        article: action.payload
      };
    default:
      return state;
  }
};
