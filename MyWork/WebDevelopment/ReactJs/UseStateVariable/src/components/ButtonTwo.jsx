import React from 'react'

const ButtonTwo = (props) => {
    return (
    <div className="button-div w-full bg-[#708d86] rounded-[10vh]  top-[50vh] left-[46vw]">
        <button onClick={props.func} className="bg-[#EAEEF1] buttonTwo px-7 py-1  text-[#376359] w-full font-[gilroy] text-2xl rounded-[10vh]">
            {props.text}
        </button> 
    </div> 
    )
  }

export default ButtonTwo