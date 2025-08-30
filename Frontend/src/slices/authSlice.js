// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null, // Will hold either employee or company data
//     userType: null, // 'employee' or 'company'
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload.user;
//       state.userType = action.payload.userType;
//     },
//     clearUser: (state) => {
//       state.user = null;
//       state.userType = null;
//     },
//   },
// });

// export const { setUser, clearUser } = authSlice.actions;
// export default authSlice.reducer;
// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  userType: localStorage.getItem('userType') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.userType = action.payload.userType;

      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('userType', action.payload.userType);
    },
    clearUser: (state) => {
      state.user = null;
      state.userType = null;

      localStorage.removeItem('user');
      localStorage.removeItem('userType');
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
