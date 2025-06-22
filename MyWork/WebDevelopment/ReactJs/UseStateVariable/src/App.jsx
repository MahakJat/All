import React, { useState } from "react";
// useStateVariable
import Button from "./components/Button";
import OnClickAnywhere from "./components/OnClickAnywhere";
import ChangeValue from "./components/ChangeValue";
// A is the actual value
// setA is a function
// when changing value will set value in setA that will be reflected on the frontend but in actual the value will not be changed
const App = () => {

  return (
      <OnClickAnywhere/>
      // <ChangeValue/>
  );
};

export default App;

{
  // let [A, setA] = useState(10);
  // console.log(A);
  /* <button onClick={()=>{
  setA(A++) 
  console.log(A);
 }}
 >hellow ,{A}</button> */
}

// import React from 'react'
// const App = () => {
//   let a = 10;
//   console.log(a);
//   function changeValue(){
//      a = 20
//      console.log(a);
//   }
//   return (
//     <div className='p-[20vh]'>
//         <h1 className='text-5xl font-bold' >value of a ,{a}</h1>
//         <button className='px-[2vh] py-[1vh] rounded-[2vh] bg-black text-white mt-3'
//       onClick={changeValue}>Change</button>
//       {/* the value of the a will be changed but it will not reflect on the frontend (concept of real and virtual) in js it was directly changing because we were directly working on real DOM to change data of frontend we use usestatevariable*/}
//     </div>
//   )
// }

// export default App

// // onClick={changeValue()} if we will write the function like this before clicking on button the value a will be changed and this because where ever () after function then the function is called so remove ()

// // apart from it we can use an anonymous function because its without using calling that avoiding ()

// // onClick={function(){
// //   a = 20
// //   console.log(a);
// // }}

// // function will be automatically called without clicking

// // onClick={(() => {a = 20
// //   console.log(a);
// // })()}

// // onClick={changeValue()}

// // onClick={function(){
// //   a = 20
// //   console.log(a)
// // }()}

// // function will be called on clicking only

// // onClick={(() => {a = 20
// //   console.log(a);
// // })}

// // onClick={changeValue}

// // onClick={function(){
// //   a = 20
// //   console.log(a)
// // }}
