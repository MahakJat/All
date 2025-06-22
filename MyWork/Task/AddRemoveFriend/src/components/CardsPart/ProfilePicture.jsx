import React from 'react'
import Image from './Image'

const ProfilePicture = ({profilePicture}) => {
  return (
    <div className='w-[24vh] h-[24vh] shadow-md rounded-full  overflow-hidden'>
        <Image profilePicture={profilePicture}/>
    </div>
  )
}

export default ProfilePicture