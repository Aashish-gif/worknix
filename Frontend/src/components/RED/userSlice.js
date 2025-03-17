// src/components/RED/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null, // Default to null
    email: null, // Default to null
    profilePic: null, // Default to null
    type: null, // Default to null (user or company)
  },
  reducers: {
    // Action for logging in as a user
    loginUser: (state, action) => {
      state.name = action.payload.username;
      state.email = action.payload.email;
      state.profilePic = action.payload.profilePic || "https://placehold.co/40/008080/FFF?text=U";
      state.type = "user";
    },
    // Action for logging in as a company
    loginCompany: (state, action) => {
      state.name = action.payload.companyName;
      state.email = action.payload.email;
      state.profilePic = action.payload.profilePic || "https://placehold.co/40/008080/FFF?text=C";
      state.type = "company";
    },
    // Action for logging out
    logout: (state) => {
      state.name = null;
      state.email = null;
      state.profilePic = null;
      state.type = null;
    },
  },
});

// Export the actions
export const { loginUser, loginCompany, logout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;