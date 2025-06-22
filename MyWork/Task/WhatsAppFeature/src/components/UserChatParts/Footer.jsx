import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-2 pb-2'>
       <div className='flex gap-2 items-center justify-between px-4 w-[22vw] border border-gray-400  rounded-full '>
         <input type="text" placeholder='Message' className='focus:outline-none focus:border-none   focus:ring-0'/>
         <div>
         <i class="text-2xl  text-gray-500 ri-attachment-2"></i>
         <i class="text-2xl text-gray-500 ri-camera-line"></i>
         </div>
       </div>
       <i class="bg-green-700 rounded-full px-3 text-xl text-white py-2 ri-mic-fill"></i>
    </div>
  )
}

export default Footer