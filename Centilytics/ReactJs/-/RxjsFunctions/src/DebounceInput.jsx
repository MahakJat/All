import React, { useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

function DebounceInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    const subscription = fromEvent(inputRef.current, 'input').pipe(
      debounceTime(3000),
      map((e) => e.target.value)
    ).subscribe((value) => {
      console.log('Debounced Value:', value);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h2>Debounce Search Input</h2>
      <input type="text" ref={inputRef} placeholder="Type something..." />
    </div>
  );
}

export default DebounceInput;


//  fromEvent: What It Does
// fromEvent creates an Observable from DOM events, like clicks, inputs, scrolls, key presses, etc.

// 📌 In simple terms:
// It listens to a DOM event and turns each event into a stream of values you can work with using RxJS operators like debounceTime, throttleTime, map, filter, etc.

// ✅ Syntax:
// js
// Copy
// Edit
// fromEvent(target, eventName)
// target: The DOM element you want to listen to.

// eventName: The name of the event (e.g., 'click', 'input', 'scroll', etc.)