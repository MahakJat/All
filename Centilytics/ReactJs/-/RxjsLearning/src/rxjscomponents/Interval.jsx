import React from 'react'
import { interval } from 'rxjs'

const Interval = () => {
    const number$ = interval(1000); //it is an observable which emits value 0 1,2,3...

    const subscription = number$.subscribe(
        value=>{console.log(value)}
    );
setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
  return (
    <div>Interval</div>
  )
}

export default Interval


// Visual Analogy
// 📦 Promise: Like ordering food once
// You order → wait → food arrives → done ✅

// 🔁 Observable: Like a subscription
// You subscribe → get new episodes/data → can unsubscribe anytime ✅


// | Scenario              | Use Promise                      | Use Observable                   |
// | --------------------- | -------------------------------- | -------------------------------- |
// | Fetching user profile | ✅ One-time data                  | ❌ No need for multiple emissions |
// | Live stock prices     | ❌ Too dynamic for one-time fetch | ✅ New prices every second        |
// | Form submission       | ✅ Submit & wait for response     | ❌ Single action, no stream       |
// | Typing input listener | ❌ Not applicable                 | ✅ Stream of keystrokes           |
// | Chat messages         | ❌ Can’t listen continuously      | ✅ Push messages as they arrive   |


// | Scenario                          | Use Promise | Use Observable |
// | --------------------------------- | ----------- | -------------- |
// | Fetch user profile                | ✅ Yes       | ❌ Overkill     |
// | Submit login form                 | ✅ Yes       | ❌ Not needed   |
// | Stream of stock price updates     | ❌ No        | ✅ Perfect      |
// | Real-time chat messages           | ❌ No        | ✅ Perfect      |
// | Countdown timer (tick every sec)  | ❌ No        | ✅ Perfect      |
// | Upload file and get link          | ✅ Yes       | ❌ Too complex  |
// | Handle search input with debounce | ❌ Hard      | ✅ Easy         |
// | Keyboard key press listener       | ❌ No        | ✅ Best fit     |

// | Feature    | Promise           | Observable                 |
// | ---------- | ----------------- | -------------------------- |
// | Emissions  | Single value      | Multiple values over time  |
// | Cancelable | ❌ No              | ✅ Yes (`unsubscribe()`)    |
// | Use case   | One-time tasks    | Real-time or event streams |
// | Built-in   | ✅ Yes (native JS) | ❌ Needs RxJS or similar    |

// Use Promise when 📦
// You need a single result in the future
// Example: Fetch user data from API

// Use Observable when 🔁
// You need multiple values over time
// Example: WebSocket messages, user typing, live feeds