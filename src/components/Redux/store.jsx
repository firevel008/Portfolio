import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import authReducer from './AuthSlice/authSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
})