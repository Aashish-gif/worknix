// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Adjust the path as needed

export default configureStore({
  reducer: {
    user: userReducer, // Add the user slice to the store
  },
});