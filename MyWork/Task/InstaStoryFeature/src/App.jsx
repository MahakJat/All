import React, { useEffect, useState } from 'react'
import Instagram from './components/Instagram'
import Story from './components/Story'
import axios from 'axios'
const App = () => {
  const [data, setdata] = useState([])
  const getData = async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    setdata(response.data);
    console.log(response.data)
  }

  useEffect(()=>{
    getData();
  },[])

  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (user)=>{
    setSelectedUser(user)
  }
  
  return (
    <div className='h-screen w-screen bg-[#ababab] gap-3 flex justify-center items-center'>
      {
        selectedUser ? 
        <Story selectUser = {selectUser} selectedUser = {selectedUser}/>:
        <Instagram data = {data} selectUser = {selectUser}/> 
      }
      
    </div>
  )
}

export default App