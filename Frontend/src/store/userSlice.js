// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage if exists
const savedUser = localStorage.getItem("userState");

const initialState = savedUser ? JSON.parse(savedUser) : { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
