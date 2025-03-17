import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Ensure correct path

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// ❌ Wrong: export default store;  (You exported `store` as a named export)
// ✅ Correct: export default store;
export default store;
