import types from '../actions/types.js';

const initialState = {
  name: 'daniel',
  list: [],
  article: {}
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_BLOGS:
      return {
        ...state,
        list: action.payload
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

export default blogReducer;
