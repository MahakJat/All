import { createSlice } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';

// Initial state
const initialState = {
  posts: [],
  postsLoading: false,
  postsError: null,
  selectedPost: null,
};

// Action types
const FETCH_POSTS = 'posts/fetchPosts';
const FETCH_POSTS_SUCCESS = 'posts/fetchPostsSuccess';
const FETCH_POSTS_FAILURE = 'posts/fetchPostsFailure';
const SELECT_POST = 'posts/selectPost';

// Slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts: (state) => {
      state.postsLoading = true;
      state.postsError = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.postsLoading = false;
    },
    fetchPostsFailure: (state, action) => {
      state.postsLoading = false;
      state.postsError = action.payload;
    },
    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  }
});

// Actions
export const { fetchPosts, fetchPostsSuccess, fetchPostsFailure, selectPost } = postsSlice.actions;

// Epics //this the epic function
const fetchPostsEpic = (action$) => //action$ me sare action aate hai joh ki dispatch hote hai
  action$.pipe(
    ofType(FETCH_POSTS),
    mergeMap(() =>
      from(axios.get('https://dummyjson.com/posts')).pipe( // The RxJS from operator is used to convert various data types into an Observable.
        map((response) => fetchPostsSuccess(response.data.posts)),
        catchError((error) => of(fetchPostsFailure(error.message)))
      )
    )
  );
export const postsEpics = [fetchPostsEpic];

export default postsSlice.reducer;

//   Bahut hi important sawal! 👏

// Aapne poocha:

// action$ ke andar actions kaha se aa rahe hain?

// Let’s understand this very clearly:

// 🧠 What is action$?
// action$ is a stream (RxJS Observable) of every Redux action that is dispatched in your application.

// Ye stream Redux store se automatically milta hai jab aap Epic middleware setup karte ho.



//  Example: How it works behind the scenes
// Jab aap store me Epic middleware lagate ho:

// js
// Copy
// Edit
// import { createEpicMiddleware } from 'redux-observable';

// const epicMiddleware = createEpicMiddleware();

// const store = configureStore({
//   reducer: { ... },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(epicMiddleware),
// });

// // 👇 Ye line important hai
// epicMiddleware.run(rootEpic);
// Ye setup karta hai Epic system ko, aur:

// Redux store jab bhi dispatch(action) karta hai,

// Wo action Epic middleware ke paas bhi jata hai,

// Epic middleware us action ko action$ stream me push karta hai.

// 🧵 Ek Real Flow:
// Suppose:
// js
// Copy
// Edit
// dispatch(fetchUsers());
// Then:
// Redux -> Epic Middleware -> action$ me push hota hai

// js
// Copy
// Edit
// action$ = Observable.of(fetchUsers()); // Internally
// Aur fir ye code execute hota hai:

// js
// Copy
// Edit
// action$.pipe(
//   ofType(fetchUsers.type), // Action match karega
//   ...
// )
// 🔍 Visual Diagram:
// text
// Copy
// Edit
// You dispatch an action → Redux Store → Epic Middleware → action$ stream
//                                                     ↓
//                                                 Epic catches it using ofType()
// 📝 Final Answer (Simple Hindi):
// action$ ek stream hai jisme har Redux action aata hai jo dispatch kiya gaya ho.
// Ye stream Redux-Observable (Epic middleware) ke setup ke baad automatically kaam karta hai.
// Isliye action$ ke andar sab actions aa rahe hote hain.

