import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null, // For both employee and company
  name: null, // Can be username (employee) or companyName (company)
  email: null,
  userType: null, // "employee" or "company"
  profilePic: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { userId, name, email, userType, profilePic } = action.payload;
      state.userId = userId;
      state.name = name; // Can be username or companyName
      state.email = email;
      state.userType = userType;
      state.profilePic = profilePic;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.userId = null;
      state.name = null;
      state.email = null;
      state.userType = null;
      state.profilePic = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;