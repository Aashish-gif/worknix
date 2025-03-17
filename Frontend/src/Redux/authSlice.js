import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Holds user details
  isAuthenticated: false, // Tracks authentication status
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set user details
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // Action to clear user details (logout)
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export the actions
export const { setUser, clearUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;