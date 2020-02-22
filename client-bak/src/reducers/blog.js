import types from '../actions/types.js';

const initialState = {
  name: 'daniel',
  list: [],
  article: {},
  timestamp: Date
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_BLOGS:
      return {
        ...state,
        list: action.payload.data,
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

export default blogReducer;
