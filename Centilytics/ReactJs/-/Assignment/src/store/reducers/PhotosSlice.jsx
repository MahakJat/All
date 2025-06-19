import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  photosList: [],
  favoriteList: [],
  isLoading: false,
  isError: null,
  isModalOpen: false,
  selectedPhoto: null,
};

export const fetchPhotos = createAsyncThunk("fetchData", async () => {
  const response = await axios.get(`https://picsum.photos/v2/list`);
  return response.data;
});
//  What createAsyncThunk actually does:
// 1. Creates three action types using the string "fetchData":
// These are just text labels for different stages:

// "fetchData/pending" → when the API call starts
// "fetchData/fulfilled" → when the API call succeeds
// "fetchData/rejected" → when the API call fails

//fetchData/pending is the action type we fetchPhotos is dispatch redux automatically dispatch the "fetchData/pending" type which is mapped with the fetchphoto.pending action creator where the action do be done after calling an api

export const PhotoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const isAlreadyPhotoExists = state.favoriteList.find(
        (photo) => photo.id === action.payload.id
      );
      if (!isAlreadyPhotoExists) {
        state.favoriteList.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (elem) => elem.id !== action.payload.id
      );
    },
    openPhotoModal: (state, action) => {
      state.isModalOpen = true;
      state.selectedPhoto = action.payload;
    },
    closePhotoModal: (state) => { 
      state.isModalOpen = false;
      state.selectedPhoto = null;
    }
  },
  extraReducers: (builder) => {
    // fetchPhotos.pending is mapped to  // Action type: "fetchData/pending" interally by the redux
    // You’re saying: when the action with type "fetchData/pending" is dispatched, run this reducer logic
    builder.addCase(fetchPhotos.pending, (state) => {   //fetchPhoto is the action creator
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.photosList = action.payload;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.isError = true;
      console.log("error", action.payload);
    });

    // Here, builder is an object provided by Redux Toolkit that allows you 
    // to add case reducers for specific action types. Each addCase method 
    // specifies how the state should be updated in response to the corresponding action.
  },
});

// Here, fetchPhotos is the action creator returned by createAsyncThunk. This function, when dispatched, initiates the asynchronous operation. Redux Toolkit automatically generates three additional action creators attached to fetchPhotos:
// fetchPhotos.pending: Dispatched when the async operation starts.
// fetchPhotos.fulfilled: Dispatched when the async operation succeeds.
// fetchPhotos.rejected: Dispatched when the async operation fails.

export const { addToFavorite, removeFromFavorite, openPhotoModal, closePhotoModal } = PhotoSlice.actions;
export default PhotoSlice.reducer;


// dispatch(fetchPhotos()) 
//      ⬇
//    fetchData/pending  →  isLoading = true
//      ⬇
//    (async axios call)
//      ⬇
//    Success?            Failure?
//    ⬇                   ⬇
// fetchData/fulfilled   fetchData/rejected
//   ⬇                     ⬇
// photosList = data     isError = true
// isLoading = false


//action creator 

// const fun = ()=>{
//   return {type:"fun/data"}
// }

// const fun = () => ({
//   type: "fun/data"
// });

//  What createAsyncThunk actually does:
// 1. Creates three action types using the string "fetchData":
// These are just text labels for different stages:
// "fetchData/pending" → when the API call starts

// "fetchData/fulfilled" → when the API call succeeds

// "fetchData/rejected" → when the API call fails

// 2. Returns a thunk function named fetchPhotos
// This is a special function you can dispatch like this:

// dispatch(fetchPhotos())
// When you do this, Redux Toolkit automatically:

// a. Dispatches:

// { type: "fetchData/pending" }
// ➡ This tells Redux: "I’m starting the API call"

// b. Runs your async function:

// const response = await axios.get("...");
// ➡ It waits for this to finish.

// c. If successful:

// { type: "fetchData/fulfilled", payload: response.data }
// ➡ It gives the data to Redux.

// d. If failed:

// { type: "fetchData/rejected", error: someError }
// ➡ It tells Redux something went wrong.

// 3. Attaches helper action creators to fetchPhotos:
// You now get:

// fetchPhotos.pending   // -> action creator for "fetchData/pending"
// fetchPhotos.fulfilled // -> action creator for "fetchData/fulfilled"
// fetchPhotos.rejected  // -> action creator for "fetchData/rejected"
// So in reducers you can write:

// builder.addCase(fetchPhotos.pending, (state) => {
//   state.loading = true;
// })
// Here, fetchPhotos.pending is the same as writing:


// "fetchData/pending"
// But it's safer and easier to use.

// Why this is powerful
// With just one line:


// const fetchPhotos = createAsyncThunk("fetchData", async () => {...})
// You get:

// ✅ Action types (3 of them)

// ✅ Action creators (for all 3)

// ✅ A thunk function that:

// Automatically dispatches the right actions

// Handles async logic

// Passes the result or error to your reducer

// 🔄 Summary (Like a Story)
// You dispatch fetchPhotos().

// Redux dispatches "fetchData/pending" while it waits.

// Your API call runs.

// If it works → Redux dispatches "fetchData/fulfilled" with the data.

// If it fails → Redux dispatches "fetchData/rejected" with the error.

// Your reducer handles each of these using fetchPhotos.pending, fetchPhotos.fulfilled, etc.

// Would you like a visual diagram of this flow? I can make one for you too!







// You said:
// fetchPhotos.pending   // -> action creator for "fetchData/pending"
// fetchPhotos.fulfilled // -> action creator for "fetchData/fulfilled"
// fetchPhotos.rejected  // -> action creator for "fetchData/rejected" action creator matlab jab pending woh toh kya hoga jab fulfilled ho jayega toh kya hoga yahi na


// ChatGPT said:
// Yes! You're almost there — let me explain in very simple Hindi + English mix so it clicks fully:

// 🔄 First, what is an action creator?
// An action creator is just a function that returns an action object.

// For example:


// const someActionCreator = () => ({
//   type: "something/happened",
// });
// So when you do:

// dispatch(someActionCreator())
// It dispatches:


// { type: "something/happened" }
// ✅ Now, when you create this thunk:
// js
// Copy
// Edit
// export const fetchPhotos = createAsyncThunk("fetchData", async () => {
//   const response = await axios.get("...");
//   return response.data;
// });
// Redux Toolkit gives you these 3 action creators:

// fetchPhotos.pending() → returns { type: "fetchData/pending" }

// fetchPhotos.fulfilled(data) → returns { type: "fetchData/fulfilled", payload: data }

// fetchPhotos.rejected(error) → returns { type: "fetchData/rejected", error: error }

// 🔍 What actually happens?
// You do not call these directly.

// Instead, you do:

// js
// Copy
// Edit
// dispatch(fetchPhotos());
// And Redux Toolkit does this for you behind the scenes:

// Start request:
// ➤ It automatically dispatches fetchPhotos.pending()
// → { type: "fetchData/pending" }

// If request is successful:
// ➤ It automatically dispatches fetchPhotos.fulfilled(response.data)
// → { type: "fetchData/fulfilled", payload: response.data }

// If request fails:
// ➤ It automatically dispatches fetchPhotos.rejected(error)
// → { type: "fetchData/rejected", error: error }

// 📦 So what is fetchPhotos.pending?
// It’s a ready-made action creator.

// You usually use it in the reducer like this:

// js
// Copy
// Edit
// builder.addCase(fetchPhotos.pending, (state) => {
//   state.loading = true;
// });
// You don’t call it directly — Redux calls it for you when API starts.

// 🎯 In short:
// Yes! You are right:

// fetchPhotos.pending() → jab API start hoti hai

// fetchPhotos.fulfilled() → jab data mil jata hai

// fetchPhotos.rejected() → jab error aa jata hai

// Redux Toolkit takes care of calling these for you based on your async function result.





// type
// A string that will be used to generate additional Redux action type constants, representing the lifecycle of an async request:

// For example, a type argument of 'users/requestStatus' will generate these action types:

// pending: 'users/requestStatus/pending'
// fulfilled: 'users/requestStatus/fulfilled'
// rejected: 'users/requestStatus/rejected'


// payloadCreator
// A callback function that should return a promise containing the result of some asynchronous logic.




// Return Value
// createAsyncThunk returns a standard Redux thunk action creator. 
// The thunk action creator function will have plain action creators 
// for the pending, fulfilled, and rejected cases attached as nested fields.

// Using the fetchUserById example above, createAsyncThunk will generate four functions:

// fetchUserById, the thunk action creator that kicks off the async payload callback you wrote
// fetchUserById.pending, an action creator that dispatches an 'users/fetchByIdStatus/pending' action
// fetchUserById.fulfilled, an action creator that dispatches an 'users/fetchByIdStatus/fulfilled' action
// fetchUserById.rejected, an action creator that dispatches an 'users/fetchByIdStatus/rejected' action
// When dispatched, the thunk will:

// dispatch the pending action
// call the payloadCreator callback and wait for the returned promise to settle
// when the promise settles:
// if the promise resolved successfully, dispatch the fulfilled action with the promise value as action.payload
// if the promise resolved with a rejectWithValue(value) return value, dispatch the rejected action with the value passed into action.payload and 'Rejected' as action.error.message
// if the promise failed and was not handled with rejectWithValue, dispatch the rejected action with a serialized version of the error value as action.error
// Return a fulfilled promise containing the final dispatched action (either the fulfilled or rejected action object)