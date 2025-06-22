import React, { useState } from "react";

const App = () => {
  const [userName, setuserName] = useState("");

  const submitHandler = (e) => {
     e.preventDefault();
     console.log("UserName is :" + userName);
     setuserName(""); //after submission setUserName should be empty

  };
  return (
    <div className="flex justify-center items-center h-screen text-xl ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          
            onChange={(object) => {
    
            setuserName(object.target.value);
 
            //this function is runned when there is a change in the input  object.target will target the currect object .value will give what is the currect value in the input
          }}
          value={userName}
          className="border border-black"
       />
        {/* when we write something on value = {} that get fixed in the input nothing can be removed or added to it  */}
        <button className="border border-black px-4 py-1 rounded-[2vh] ml-3 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;


// // if we use input tag directly the we are directly intracting with dom so to avoid it we use to way binding
// <form
// onSubmit={(e) => {
//   submitHandler(e);
// }}
// >
// <input
//   type="text"
//   placeholder="Enter your name"
//   onChange={(object) => {
//     //this function is runned when there is a change in the input  object.target will target the currect object .value will give what is the currect value in the input
//     console.log(object.target.value);
//   }}
//   className="border border-black"
// />
// {/* when we write something on value = {} that get fixed in the input nothing can be removed or added to it  */}
// <button className="border border-black px-4 py-1 rounded-[2vh] ml-3 ">
//   Submit
// </button>
// </form>