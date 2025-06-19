import React, { useEffect } from "react";
import { Observable, Subject } from "rxjs";

const SubjectInRxjs = () => {
  // The reason is simple: the Subject class inherits from both:
  // Observable (so it can be subscribed to), and
  // Observer (so it has methods like next(), error(), and complete())

//   A Subject is a special type of Observable that allows
//  multicasting — it can emit values to multiple subscribers
//  at the same time. Unlike a normal Observable, which pushes 
// data individually to each subscriber (unicast), a Subject 
// shares the same data among all subscribers (multicast).

// | Feature      | Observable                      | Subject                       |
// | ------------ | ------------------------------- | ----------------------------- |
// | Type         | Unicast (one-to-one)            | Multicast (one-to-many)       |
// | Emits values | Only from within                | You can call `subject.next()` |
// | Usage        | Passive (emits when subscribed) | Active (you can trigger it)   |


// multicast example
//  What is Multicast?
// Multicast means that multiple subscribers share the same source of data — they don’t get separate executions.

// Instead of running the Observable logic for every subscriber (as in unicast), multicast runs the logic once, and all subscribers receive the same values.

// 🔸 How is multicast achieved in RxJS?
// Typically by using a Subject (or its variants like BehaviorSubject, ReplaySubject, etc.).

// A Subject is:

// An Observable (can be subscribed to)
// An Observer (can receive next(), error(), complete())
// That makes it perfect for multicasting.



const subject = new Subject();

subject.subscribe(value => console.log('Subscriber A:', value));
subject.subscribe(value => console.log('Subscriber B:', value));
subject.next(Math.random());

// As an Observer
// You can send values into a Subject using:

// subject.next(value)

// subject.error(err)

// subject.complete()

// This makes it behave like an observer receiving values.

// ✅ As an Observable
// You can subscribe to a Subject:

// subject.subscribe(...)

// All subscribers will receive values pushed by next() — this is its observable behavior.

  return <div>SubjectInRxjs</div>;
};

export default SubjectInRxjs;

// | Feature          | Unicast (default `Observable`)        | Multicast (`Subject`)                 |
// | ---------------- | ------------------------------------- | ------------------------------------- |
// | Source execution | Runs **once per subscriber**          | Runs **once total**, shared by all    |
// | Data received    | Each subscriber gets **unique data**  | All subscribers get **same data**     |
// | Use case         | HTTP requests, timers, isolated tasks | Real-time events, streams, websockets |
