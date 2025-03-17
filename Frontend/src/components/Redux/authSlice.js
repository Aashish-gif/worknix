import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage if available
const storedUser = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: storedUser, // Stores user details like username, email, companyName, etc.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // Remove user from localStorage on logout
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
