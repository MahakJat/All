import { configureStore } from '@reduxjs/toolkit'
import Slice1 from './reducer/Slice1'
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
})