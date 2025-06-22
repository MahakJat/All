import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
   const [data, setdata] = useState([]);

   const getData = async ()=>{
     const response = await axios.get("https://fakestoreapi.com/products");
     setdata(response.data);
   }

   useEffect(function(){
    getData();
   },[]);



  return (
    <div className='h-screen p-4 bg-[#F5F8FE] flex flex-wrap gap-5'>
       {
         data.map(function(elem,idx){
           return <div className='className="mb-10 px-5 py-3 w-[35vh] bg-[#FfFFFF] shadow-lg rounded-2xl flex flex-col  gap-1'>
              <img className=" object-cover h-36 rounded-lg" src={elem.image} alt="" />
              <h1 className="font-semibold line-clamp-1 mt-2 leading-4">{elem.title}</h1>
                <p className="line-clamp-1 text-sm text-gray-400">{elem.description}</p> 
              <h1 className="font-bold text-xl">${elem.price}</h1> 
              <button className="w-full bg-slate-700 py-2 mt-5 text-white rounded-xl">Add to Cart</button>
           </div>
         })
       }
       
    </div>
  )
}

export default App