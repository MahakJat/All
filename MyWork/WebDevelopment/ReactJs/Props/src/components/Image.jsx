import React from 'react'
// object destructuring
// name should pe same as that of the given in the function from where value is passed
const Image = ({source}) => {
    console.log(source);
  return (
     <div  className='w-[50vh] h-[50vh] rounded-full ml-3'>
         <img src={source} className='object-cover w-[100%] h-[100%]' alt="" />
     </div>
  )
}

export default Image