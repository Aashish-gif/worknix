// src/reducers/index.js
import { combineReducers } from 'redux';

// Example dummy reducer
const dummyReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Combine reducers (even if you have only one now)
const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export default rootReducer;
