import React from 'react'
import User from './User'

const BottomPart = ({chatData , onUserClick}) => {
  
  return (
    <div className='max-h-[62vh] overflow-y-auto no-scrollBar'>
     {
      chatData.map(function(user,idx){
        return <User key = {idx} user = {user} onUserClick = {onUserClick}/>
      })
     }
    </div>
  )
}

export default BottomPart