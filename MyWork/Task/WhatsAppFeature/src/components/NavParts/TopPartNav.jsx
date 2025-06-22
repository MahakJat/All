import React from 'react'

const TopPartNav = () => {
  return (
    <div className='flex justify-between items-center px-4 py-4'>
        <h1 className='font-medium text-[3.2vh]'>WhatsApp</h1>
        <div className='flex gap-4 text-[3.2vh]'>
            <i class="ri-camera-fill"></i>
            <i class="ri-search-line"></i>
            <i class="ri-more-2-fill"></i>
        </div>
    </div>
  )
}

export default TopPartNav