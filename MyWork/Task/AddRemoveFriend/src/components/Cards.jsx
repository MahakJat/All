import React from 'react'
import Image from './CardsPart/Image'
import Button from './CardsPart/Button'
import Name from './CardsPart/Name'
import Details from './CardsPart/Details'
import ProfilePicture from './CardsPart/ProfilePicture'

const Cards = ({object}) => {
  console.log(object);
  return (
    <div className='h-[25vw] w-[20vw] bg-[#ff5a07]   flex flex-col items-center text-center p-4 rounded-3xl gap-1 shadow-md'
    style={{backgroundColor:object.bg}}
    >
        <ProfilePicture profilePicture = {object.profilePicture}/> 
        <Name name = {object.name}/>
        <Details dialog = {object.dialog}/>
        <Button />
    </div>
  )
}

export default Cards