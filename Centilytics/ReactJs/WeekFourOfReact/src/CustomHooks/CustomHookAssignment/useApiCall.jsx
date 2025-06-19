import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useApiCall = (value) => {
  const [response, setResponse] = useState([]);
    const getData = async ()=>{
       try{
        const responseData = await axios.get(`https://fakestoreapi.com/${value}`);
        setResponse(responseData.data)
       }catch(err){
        console.error(`Error fetching ${value}:`, err);
       }
     }
     useEffect(()=>{
        getData()
     },[value])
    return (response)
}

export default useApiCall