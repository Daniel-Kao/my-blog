import types from "../actions/types.js";

const initialState = {
  name: "daniel",
  list: []
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_BLOGS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default blogReducer;
