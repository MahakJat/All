import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const MyComponent = ({setTrigger,trigger}) => {
    

    useEffect(() => {
        console.log('Mounted');
        setTrigger(false); 
        console.log(trigger)
        return () => {
          console.log('Unmounted');
          setTrigger(true); 

        };
      }, []);
  return (
     <h1>Hello, I’m alive!</h1>
  )
}

export default MyComponent