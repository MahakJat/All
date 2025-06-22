import React from 'react'

const Grid = ({Data , chageImage}) => {  
  return (
    <div className='h-screen flex  flex-wrap'>
       {
        Data.map(function(elem){
       
           return <img onClick={()=>{
                chageImage(elem)
           }} className='w-[24vh] h-[24vh] object-cover shrink-0' src={elem.download_url} alt="" /> 
        })
       }
    </div>
  )
}

export default Grid