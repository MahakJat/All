import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/CounterSlice";

export const store = configureStore({
    reducer: {
      counter:counterReducer
    },
  })


//   joh hum reducers ko action dete hai woh unhe event banake dedeta hai