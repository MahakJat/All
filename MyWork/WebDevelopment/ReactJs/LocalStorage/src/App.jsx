import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const basicsOfLocalStorage = ()=>{
    localStorage.setItem("Name","Mahak Jat") //set item in key value pair
    const userName =  localStorage.getItem("Name") //get item by passing key
    console.log(userName);
    // localStorage.clear(); this will clear all the data from local storage 
    // localStorage memory of browser in particular device
    
    // in the value we can only pass string data
   
    // it means object will not be passed as value we can pass json data after stringify() it
  
   const data = {
    "userName":"Mahak",
    "age":"21",
   }
  
    localStorage.setItem("userDetails",JSON.stringify(data));
   
    const value = localStorage.getItem("userDetails");
    console.log(JSON.parse(value)); //after JSON.parse we will get value
  }
  
  const [theme, settheme] = useState(localStorage.getItem('theme'));
  const boxRef = useRef(null)
  
  const modeChange = ()=>{
    settheme(theme == "light" ? 'dark' : 'light');
  }

  useEffect(function(){
   if(theme == "light"){
      boxRef.current.setAttribute("id" ,"light");
   }else{
    boxRef.current.setAttribute("id" , "dark");
   }

  },[theme])

  return (
    <div ref = {boxRef} className='h-screen'>
      <Navbar func = {modeChange}/>
    </div>
  )
}

export default App