import { combineReducers } from 'redux';
import { blog, blogReducer } from './blog';

const reducer = combineReducers({
  blog: blogReducer
});

const initialState = {
  blog
};

export { reducer, initialState };
