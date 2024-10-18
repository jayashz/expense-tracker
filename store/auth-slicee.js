import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Initial state
const initialState = {
  token: null,
  isAuthenticated: false,
};

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, action) {

      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
      AsyncStorage.setItem('token',action.payload);
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions for dispatch
export const { authenticate, logout } = authSlice.actions;

// Export reducer for store
export default authSlice;