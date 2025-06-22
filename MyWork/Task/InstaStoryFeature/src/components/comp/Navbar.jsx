import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-3 py-4'>
        <img className='w-28' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="" />
         <div className='flex gap-3 items-center'>
           <i class="font-medium text-2xl ri-heart-line"></i>
           <i class="font-medium text-2xl ri-messenger-line"></i>
         </div>
    </nav>
  )
}

export default Navbar