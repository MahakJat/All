import React from 'react'
import { useState } from 'react';
import MyComponent from './MyComponent';
const App = () => {
  const [show, setShow] = useState(true);
  const [trigger, setTrigger] = useState(true)
  return (
    <div>
      <button onClick={() => {setShow(!show)
        console.log(trigger)
      }}>Toggle</button>
      {show && <MyComponent setTrigger={setTrigger}  trigger={trigger}/>}
    </div>
  )
}

export default App