import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import postReducer from "./reducers/PostSlice"
import userReducer from "./reducers/UserSlice"
import PostEpic from "./middleware/PostEpic";
import UserEpic from "./middleware/UserEpic";
const epicMiddleware = createEpicMiddleware(); //creating the middleware

const rootEpic = combineEpics(
  PostEpic,
  UserEpic
);

export const store = configureStore({
  reducer: {
    post: postReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) => {
   return getDefaultMiddleware().concat(epicMiddleware);
  },
});

epicMiddleware.run(rootEpic); //this will connect the middle ware the logic written in the epic (function)
