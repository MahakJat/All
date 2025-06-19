import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useApiCall2 = (value) => {
    const [response, setResponse] = useState([])
    const getData = async()=>{
        const response = await axios.get(value);
        setResponse(response.data)
    }

    useEffect(()=>{
getData();
    },[value])
  return (
   response
  )
}

export default useApiCall2