import React from 'react'
import Stories from './Stories'

const StorySection = ({data , selectUser}) => {
  
  return (
    <div className="flex gap-2 pb-3 no-scrollbar overflow-x-auto ">
       {
        data.map(function(elem){
          return <Stories user= {elem} selectUser = {selectUser} />
        })
       }
    </div>
  )
}

export default StorySection