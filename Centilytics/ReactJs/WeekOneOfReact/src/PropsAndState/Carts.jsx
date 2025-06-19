import React from "react";

const Carts = (props) => {
  // console.log(username,age)
  // console.log(props)
  //we  can also do  destructure the props {username , age}
  return (
    <div className="carts">
      <h1>User Details</h1>
      <h1 className="username">Username: {props.username}</h1>
      <h3>User age: {props.age}</h3>
    </div>
  );
};

export default Carts;
