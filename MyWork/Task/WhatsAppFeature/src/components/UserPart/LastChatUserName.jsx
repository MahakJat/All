import React from 'react'
import Username from './Username'
import LastChat from './LastChat'

const LastNameUserChat = ({username , lastmessage}) => {
  return (
    <div>
        <Username username= {username}/>
        <LastChat lastmessage = {lastmessage}/>
    </div>
  )
}

export default LastNameUserChat