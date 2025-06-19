import React, { useEffect } from 'react'
import { Observable } from 'rxjs'

const ObservableObsever = () => {
  // An Observable is a data stream — it emits values over time, 
  // and you can listen (or subscribe) to these values.
// an Observable — a stream that can emit data over time.
// The function you pass into Observable's constructor is called the subscriber function.
  useEffect(()=>{
    const observable = new Observable((subscriber)=>{
    subscriber.next(10);
    subscriber.next(11);
    // subscriber.error("some error")
    subscriber.next(12);
    }
  );
  
  const observer = {
    next:(value)=>{
         console.log("value of " , value)
    },
    error:(err)=>{
        console.log("observer got the error" + err);
    },
    complete:()=>{
         console.log("observer complete");
    }
  }
   

//   when you subsrcibe 
// It wraps your object safely
// const safeObserver = {
//   next: observer.next || function () {},
//   error: observer.error || function () {},
//   complete: observer.complete || function () {}
// };

// // Then it calls the Observable's producer with this safe object
// observable._subscribe(safeObserver);

  
  const subscription = observable.subscribe(observer); //It returns a Subscription object that has an unsubscribe() method
//    console.log(observable.subscribe(observer));
  
//🔹 What is subscribe() in RxJS?
// In RxJS, subscribe() is a method used to start listening to an Observable.

// 📌 Analogy:
// Think of an Observable like a radio station — it’s continuously broadcasting signals.

// To receive those signals, you must tune in — and that’s exactly what subscribe() does.

// ✅ What subscribe() Does:
// Connects an observer to an observable.

// Starts the observable execution.

// Allows the observer to receive emitted values, errors, or completion notifications.

  return ()=>{
   subscription.unsubscribe(); // Stops receiving data
  }
  },[])
    
  
  return (
    <div>ObservableObsever</div>
  )
}

export default ObservableObsever


// const observer = {
//   next: function (val) {
//     console.log('Value:', val);
//   }
//   // No error or complete provided
// };

// const safeObserver = {
//   next: observer.next || function () {},
//   error: observer.error || function () {}, // becomes no-op
//   complete: observer.complete || function () {} // becomes no-op
// };

// safeObserver.next(10);      // logs: Value: 10
// safeObserver.error('Oops'); // does nothing
// safeObserver.complete();    // does nothing
