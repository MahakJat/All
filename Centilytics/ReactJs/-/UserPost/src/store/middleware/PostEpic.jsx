import { ofType } from "redux-observable";
import { FETCH_POSTS,FETCH_POSTS_FAILURE } from "../reducers/PostSlice";
import { fetchPostFailure,fetchPostSuccess } from "../reducers/PostSlice";
import { map, mergeMap,of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs";
 const PostEpic = (action$)=>{
 return action$.pipe(
    ofType(FETCH_POSTS), //ye first operator //fetchPost.type
    mergeMap(()=>{ //second operator
      return ajax.getJSON(import.meta.env.VITE_API_POST_URL).pipe( //ajax return an observable the apply map to get it data
          map((value) => fetchPostSuccess(value.posts)), // runs if no error in ajax returning
          catchError((error) => of(fetchPostFailure(error.message))) // runs if error occurs
       )
     }
    )
  )
}


export default PostEpic
// Epic returns an Observable that emits actions → Redux dispatches those emitted actions automatically. i.e why it is neccessary if we are returning any action of the redux we need to return the observable
// Exactly! Returning an Observable that emits an action tells Redux (via the Epic middleware) to dispatch that action.


//when the observable returns the action the Redux-Observable automatically calls store.dispatch() on your behalf with that action. so no need to write the dispatch 

//  The observable returned by:
// ajax also writes an observable 
// ajax.getJSON(...).pipe(map(...), catchError(...))
// That whole result is merged into the action stream, so that Redux can dispatch the result (success or failure).

// it means merge map operator se me 
//  ajax.getJSON('https://dummyjson.com/posts')
//   isko trigger kar rahe hai aur phir ye ek observable 
//   return kar raha hai jise pe hum pipe kar par rahe hai
//    mergemap ki baje se means nested piping kar pa rahe hai merge map se



//why of is not used in the map
// to continue the stream of the action /opeator the return value from the operator should be an observable otherwise the stream will break
//map function itself returns an observable
// it means the map return the function wrapped in the observable but the fucntion returns the value
// The function you provide to map returns a plain value (like an action object).
// The map operator wraps that returned value inside a new Observable.
// So effectively, map returns an Observable that emits whatever your function returns.


// catchError((error) => { return of(fetchPostFailure(error.message))})  // runs if error occurs

// catchError expects you to return an Observable 
// Here, you want to emit a single action object (fetchPostFailure(error.message)), but this is a plain object, not an Observable.
// of wraps that action object into an Observable that emits exactly one value and completes.
// This keeps the Observable chain alive, so the Epic continues to emit actions.
// Without of, returning just the action object from catchError would break the stream.


// If you don’t return an Observable (like with of(fetchPostFailure(...))) inside catchError, then:
// The Epic won’t emit any action when an error occurs.
// Redux won’t receive or dispatch the failure action.
// Your app won’t know that the error happened, so no error handling or UI update will occur.