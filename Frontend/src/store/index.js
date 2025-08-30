// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// Load user from localStorage
const savedUser = localStorage.getItem("userState");
const preloadedState = savedUser ? { user: JSON.parse(savedUser) } : undefined;

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState,
});

// Save user to localStorage on any change
store.subscribe(() => {
  localStorage.setItem("userState", JSON.stringify(store.getState().user));
});

export default store;
