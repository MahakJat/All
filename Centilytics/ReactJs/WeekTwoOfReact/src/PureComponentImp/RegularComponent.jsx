import React, { useEffect } from 'react'

const RegularComponent = () => {
    console.log("regular component")
    useEffect(()=>{
        console.log("mounted");
        // jab component re render hota hai toh pehle pura component unmount hota hai aur phir mount hota hai changes ke sath
        return ()=>{
            console.log("unmounted");
        }
    })
  return (
    <div>RegularComponent</div>
  )
}

export default RegularComponent