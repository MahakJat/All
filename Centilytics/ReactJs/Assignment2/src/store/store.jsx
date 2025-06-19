import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import postsReducer, { postsEpics } from './postsSlice';
import commentsReducer, { commentsEpics } from './commentsSlice';

// Combine all epics
const rootEpic = combineEpics(
  ...postsEpics,
  ...commentsEpics
);
// Because epicMiddleware.run() only accepts one root epic.
// So, if you have multiple epics, you must combine them into one using combineEpics.
// Create epic middleware
const epicMiddleware = createEpicMiddleware();

// Configure store
const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),//adding the epic
});

// Run epic middleware
epicMiddleware.run(rootEpic); //if you will not write this code the epic middle ware will not run will not be connect to epic i.e function where you using writing the logic //connect to reacctive logic of redux

export default store;



// You're just creating the middleware — but it's not yet connected to your Epics.

// 🔁 epicMiddleware.run(rootEpic) is what actually starts your Epics (i.e., connects your reactive logic to Redux).

// It tells Redux Observable:

// “Here are all my Epics.”

// “Start listening to Redux actions.”

// “Run these side effects (like API calls) when specific actions happen.”




// middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: false,
//       serializableCheck: false,
//     }).concat(epicMiddleware), it means we are setting false the default middle ware and add ing new one


// ChatGPT said:
// Not exactly. Let's break it down:

// js
// Copy
// Edit
// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     thunk: false,
//     serializableCheck: false,
//   }).concat(epicMiddleware),
// Explanation:
// getDefaultMiddleware():

// This is a function provided by Redux Toolkit that returns the default middleware used by Redux, which typically includes:

// Redux Thunk for handling async actions.

// Serializable Check to ensure that actions and state are serializable (i.e., can be safely stored in the Redux store).

// By default, getDefaultMiddleware() includes both thunk and serializableCheck as true.

// { thunk: false, serializableCheck: false }:

// This object is passed as an argument to getDefaultMiddleware() to disable certain middlewares:

// thunk: false: Disables the default Redux Thunk middleware.

// serializableCheck: false: Disables the default check that ensures all actions and state are serializable.

// Essentially, this is telling Redux to not use the default Thunk middleware and not perform serializability checks.

// .concat(epicMiddleware):

// After disabling Thunk and serializability checks, you use .concat(epicMiddleware) to add your own custom middleware (epicMiddleware in this case) to the middleware chain.

// In summary:
// You're not "setting false" to the default middleware itself, but you're modifying the default middleware configuration by:

// Disabling Thunk and serializability checks.

// Adding epicMiddleware to handle asynchronous actions using redux-observable (i.e., handling side effects via Epics).

// This approach gives you more control over which middleware is included and how the default ones are configured.







// You said:
// what are  serializableCheck 


// ChatGPT said:
// Great question! Let’s break down what serializableCheck means in Redux Toolkit.

// 🔍 What is serializableCheck?
// In Redux, your state and actions should ideally be serializable — meaning they can be safely converted to a string (usually with JSON.stringify) and stored, logged, or replayed.

// This is important because:

// It allows tools like Redux DevTools to log and replay actions.

// It helps catch bugs caused by storing complex, non-serializable objects in the state.

// 🛑 What is a "non-serializable" value?
// Examples of non-serializable values:

// Functions

// Date objects

// Map / Set

// DOM elements

// Class instances

// Promises

// Example:

// js
// Copy
// Edit
// {
//   user: {
//     name: 'Alice',
//     loginTime: new Date() // ⛔ non-serializable
//   }
// }
// ✅ What does serializableCheck: true do?
// When serializableCheck is enabled (default behavior in Redux Toolkit):

// Redux will warn you in the console if it detects non-serializable values in:

// Actions

// State

// These warnings help keep your Redux store clean and predictable.

// ❌ Why would you set serializableCheck: false?
// You might disable it when:

// You're intentionally using non-serializable values (e.g., Date, custom classes, or API response objects).

// You're handling those values safely and don’t need warnings.

// You're using middleware like redux-observable or redux-saga, where actions might temporarily hold non-serializable values (like Observables or Promises).

// Example (from your code):

// js
// Copy
// Edit
// getDefaultMiddleware({
//   thunk: false,
//   serializableCheck: false,
// })
// This disables the check because redux-observable uses Observables (which are not serializable), so the check would otherwise show warnings unnecessarily.

// 📌 Summary
// Setting	Behavior
// serializableCheck: true (default)	Warns about non-serializable values in state/actions
// serializableCheck: false	Turns off those warnings

// Let me know if you want an example of when this check would throw a warning!







// You said:
// why we make the serializabe check false


// ChatGPT said:
// We disable serializableCheck (i.e., set it to false) mainly when our Redux store or actions contain non-serializable values on purpose, and we want to avoid unnecessary warnings from Redux Toolkit.

// Let me explain clearly:

// 🔧 Why Redux Enforces Serializable Values
// Redux encourages serializable state and actions because:

// It makes debugging easier.

// Enables features like Redux DevTools, time-travel debugging, and state persistence.

// Helps prevent hard-to-track bugs.

// So by default, Redux Toolkit checks if your state/actions contain things like:

// Date, Map, Set

// Functions

// Promises

// RxJS Observables

// Custom class instances

// If it finds such values, it shows a warning.

// ⚠️ Why You Might Want to Disable It
// You disable it when:

// ✅ You know what you’re doing, and you’re intentionally using non-serializable things.
// 🧪 Example with redux-observable:
// js
// Copy
// Edit
// const fetchDataEpic = (action$) =>
//   action$.pipe(
//     ofType('FETCH_DATA'),
//     mergeMap(() =>
//       from(axios.get('/api/data')).pipe(
//         map(response => ({ type: 'FETCH_SUCCESS', payload: response.data }))
//       )
//     )
//   );
// Here:

// from(axios.get(...)) creates an Observable from a Promise.

// While this is inside middleware (epics), Redux Toolkit might still detect non-serializable values like Promises/Observables.

// If serializableCheck is enabled, Redux will warn you — even though nothing is actually wrong.

// 🧵 Another Example: Date in State
// js
// Copy
// Edit
// {
//   user: {
//     name: "Alice",
//     lastLogin: new Date()  // ⛔ Not serializable
//   }
// }
// If you're okay with this and know it won't cause issues, you might disable the check.

// ✅ When to Keep It Enabled
// You should keep serializableCheck: true (default) when:

// You're writing regular Redux logic.

// You want to be warned if you accidentally put something unserializable into state or actions.

// 📌 Summary
// Reason to Set serializableCheck: false	Why
// You're using redux-observable or RxJS	Observables aren’t serializable
// You store Dates, Maps, Sets, or functions	Redux Toolkit will warn otherwise
// You have advanced/custom logic and want to avoid warnings	You know what you're doing and accept the risk

// So in your case (using redux-observable), it's totally normal and correct to set:

// js
// Copy
// Edit
// serializableCheck: false