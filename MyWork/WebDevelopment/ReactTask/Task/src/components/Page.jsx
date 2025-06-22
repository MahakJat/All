
import React from 'react'

const Page = ({value ,chageImage}) => {
   console.log(value,chageImage)
  return (
    <div>
       <button onClick={()=>
        chageImage(null)
       }>close</button>
       <img className='h-screen object-cover' src={value} alt="" />

       <button>Download</button>
     </div>
  )
}

export default Page