import React, { useState } from 'react'

const State = () => {
 const [UserName, setUserName] = useState("Mahak");
 const [Age, setAge] = useState(21)

 const changeUser = ()=>{
    setUserName("Muskan");
    setAge(20);
 }
  return (
    <div className='state'>
         <div className="card">
             <h1>User Details</h1>
             <h1 className='username'>Username: {UserName}</h1>
             <h3>User age: {Age}</h3>
             <button onClick={changeUser}>Change User</button>
         </div>
    </div>
  )
}

export default State