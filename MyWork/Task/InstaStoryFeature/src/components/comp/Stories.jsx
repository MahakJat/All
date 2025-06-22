import React from 'react'

const Stories = ({user , selectUser}) => {
  return (
    <div onClick={()=>{
      selectUser(user);
    }} className='flex flex-col gap-1'>
       <div className="w-14 overflow-hidden h-14 p-1 bg_Color rounded-full flex-shrink-0">
         <img className='w-full h-full object-cover rounded-full' src={user.download_url} alt="" />
       </div> 
       <h1 className='text-[2vh] ml-2 leading-3 ellipsis'>{user.author}</h1>
    </div>
  )
}

export default Stories