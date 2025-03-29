import { createSlice } from "@reduxjs/toolkit";

const storedAuth = localStorage.getItem("isAuthenticated") === "true";
const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: storedAuth },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true"); // Save to storage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated"); // Clear storage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
