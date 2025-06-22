import React from 'react'
import { useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import { decrement, increment } from './store/reducers/counterSlice'
 
const App = () => {
  const dispatch = useDispatch(); //we cannot directly use the action we can use the action with the dispatch

  // to use the data we can use it by useSelector 
  const count = useSelector((state) => state);
  console.log(count.counter.value); //count.counter //counter is in store and .value in the counterSlice
  return (
    <div>
       <button onClick={()=>{
        dispatch(increment())
       }}
       >Increment</button>
       <h1>{count.counter.value}</h1>
       <button onClick={()=>{
        dispatch(decrement())
       }}>Decrement</button>
    </div>
  )
}

export default App