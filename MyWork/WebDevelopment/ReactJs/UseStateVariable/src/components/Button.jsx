import React from 'react'

const Button = (props) => {
  return (
    <div className="button-div bg-[#201f1d] w-fit rounded-[10vh] absolute top-[50vh] left-[46vw]">
      <button onClick={props.func} className="bg-[#D6D4CE] px-7 py-1 border-t border-l border-r border-[#413F3B] e border-b-2 border-b-[#413F3B] w-fit font-[gilroy] text-2xl rounded-[10vh]">{props.text}
      </button>
    </div>
  )
}

export default Button

{/* <div className="button-div bg-[#201f1d] w-fit rounded-[10vh]">
      <button onClick={props.func} className="bg-[#D6D4CE] px-4 py-1 border-t border-l border-r border-[#413F3B] e border-b-2 border-b-[#413F3B] w-fit font-[gilroy] text-2xl rounded-[10vh]">{props.text}
      </button>
    </div> */}