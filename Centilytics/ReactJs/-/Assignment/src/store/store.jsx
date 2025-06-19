import { configureStore } from '@reduxjs/toolkit'
import  PhotoReducer  from './reducers/PhotosSlice'
export const store = configureStore({
  reducer: {
    PhotoReducer : PhotoReducer
  },
})