import React from 'react'
import useApiCall2 from './useApiCall2'

const ShowApiData2 = () => {
  const result1 = useApiCall2('https://picsum.photos/v2/list')
  const result2 = useApiCall2('https://api.escuelajs.co/api/v1/products')
  console.log(result1);
  console.log(result2);
  return (
    <div>
         {
           result2.map((elem)=><h1>{elem.title}</h1>)
         } 
         {
          result1.map((elem)=><h1>{elem.author}</h1>)
         }
    </div>
  )
}

export default ShowApiData2