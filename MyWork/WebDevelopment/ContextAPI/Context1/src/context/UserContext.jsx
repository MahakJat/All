import React from 'react'

const UserContext = (props) => {
  return (
    <div>{props.children}</div> 
    // why this the children of UserContext i.e app its data will be visible on the browser
  )
}

export default UserContext