import React, { useEffect } from "react";
import { Observable } from "rxjs";
const SubscriberWorking = () => {


//     What does "Unicast" mean in the context of Observables?
// In RxJS:

// 🔸 A unicast Observable means that each subscriber gets its own independent execution of the Observable.

// That means:

// Each time you call .subscribe(), the Observable runs its logic again.

// Every subscriber gets a separate, isolated stream.

//  Each subscriber gets one dedicated execution.


  // observerable is unicast type mean one to one
  useEffect(() => {
    var observable = new Observable((observer) => {
         console.log('Observable logic running');
      observer.next(Math.random());
    });

    //     This function is called the "producer function".
    // It runs only when someone subscribes.
    const observer = {
      next: (value) => {
        console.log("value ", value);
      },
      error: (error) => {
        console.log("error occured :", error);
      },
      complete: () => {
        console.log("complete");
      },
    };

    observable.subscribe(observer);
    observable.subscribe(observer);//for this the subscriber runs the logic again



    observable.subscribe(function (value) {
      //function is the next function
      console.log("Observer A: " + value);
    });
    observable.subscribe(function (value) {
      console.log("Observer B: " + value);
    });

    // When you call subscribe(...), RxJS creates an object like:
    // {
    //   next: function (value) {
    //     console.log('Observer A: ' + value);
    //   },
    //   error: function (err) { ... }, // optional
    //   complete: function () { ... } // optional
    // }
    // That object is passed as observer to your producer function.
  }, []);

  //    The Flow of Observable and subscribe()

  // import { Observable } from 'rxjs';

  // var observable = new Observable(function (observer) {
  //   observer.next(Math.random());
  // });

  // observable.subscribe(function (value) {
  //   console.log('Observer A: ' + value);
  // });
  // 🔸 What's Happening Behind the Scenes?
  // You create an Observable with a function:

  // var observable = new Observable(function (observer) {
  //   observer.next(Math.random());
  // });
  // This function is called the "producer function".

  // It runs only when someone subscribes.

  // You subscribe to the Observable:

  // observable.subscribe(function (value) {
  //   console.log('Observer A: ' + value);
  // });
  // When you call subscribe(...), RxJS creates an object like:

  // {
  //   next: function (value) {
  //     console.log('Observer A: ' + value);
  //   },
  //   error: function (err) { ... }, // optional
  //   complete: function () { ... } // optional
  // }
  // That object is passed as observer to your producer function.

  // So when you write:

  // observer.next(Math.random());
  // — it's actually calling the next method of the subscriber you passed, which logs the value.

  return <div>SubscriberWorking</div>;
};

export default SubscriberWorking;
