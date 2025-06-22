import React from 'react'
import axios from 'axios'

const App = () => {
  //  const clickHandler =  ()=>{
  //   const data =  axios.get("https://picsum.photos/id/237/200/300");
  //   console.log(data.data);
  // }
  
  // async function clickHandler(){
  //   const data = await axios.get("https://picsum.photos/id/237/200/300");
  //   console.log(data.data);
  // }
  
  const clickHandler = async ()=>{
    const data = await axios.get("https://picsum.photos/id/237/200/300");
    console.log(data.data);
  }
  return (
    <div>
       <button onClick={
        clickHandler
       } className='border border-black px-2 py-1 m-2'>click</button>
    </div>
  )
}

export default App

// promises
// Promises are a way to handle asynchronous operations. 
// They represent a value that might be available now, or in the future, 
// or never. A promise is essentially a
//  placeholder for the result of an operation that hasn't completed yet.


// Asynchronous code is the code which does not run with flow of code it run when its timecome 
// setTimeout(() => {
//   resolve("Data fetched");
// }, 2000); this code is asynchronous because this does not run with the normal flow it will run we its time comes that 2000 letter

// this asynchronous code get create problem may we need 
// some data from backend on which our next peace of code is 
// dependent then that peace of code will run and the data which
//  is from backend  is taking time so this code will run later
//  but the next line will run which will be a problem because this line need 
// above data so this is the problem so to handle is problem we use promises and async await

// by async await means jab tak current code (Asynchronous code) excute nhi hoge tab tak aage nhi chalega