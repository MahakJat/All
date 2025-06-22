import React from 'react'
import LastChatUserName from './UserPart/LastChatUserName'
import Dp from './UserPart/Dp'


const User = ({idx,user,onUserClick}) => {
  console.log(user);
  return (
    <div onClick={()=>{
      onUserClick(user)
    }} className='flex px-3 py-3 gap-4 '>
       <Dp dp = {user.dp}/>
       <LastChatUserName username = {user.username} lastmessage = {user.messages[user.messages.length - 1].message}/>
    </div>
  )
}

export default User