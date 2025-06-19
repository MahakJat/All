import React from 'react'

const App = () => {
  let username = "Mahak Jat"
  const changeUserName = ()=>{
    console.log(username);
    username = "My name is Khan" //the username will be update but not be visible on the frontend because we are directly interacting with the real dom so for that we need to tell react to do that for that we will have to know usestate react hooks
  }
  return (
    <div> 
       <h1>Hello {username}</h1>
       <button onClick={()=>{ //direct chageUserName() nhi likhte nhi toh woh pehle hi call ho jayega aur agar function in under nhi likhna then simply write changeUsername
        changeUserName();
       }}>Change user</button>
    </div>
  )
}

export default App