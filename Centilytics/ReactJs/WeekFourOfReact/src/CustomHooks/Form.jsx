import React, { useState } from 'react'
import useFormInput from './useFormInput'

const Form = () => {
//    const [firstName, setFirstName] = useState("");
//    const [lastName,setLastName]  = useState("");

//    const handlefirstName = (e)=>{
//     setFirstName(e.target.value);
//    }

//    const handleLastName = (e)=>{
//     setLastName(e.target.value);
//    }

const firstName = useFormInput("");
const lastName = useFormInput("");

  return (
    <div>
        {/* <input placeholder='Enter first name' type="text" value={firstName} onChange={handlefirstName} />
        <input placeholder='Enter last name' type="text" value={lastName} onChange={handleLastName} /> */}
    
        <input placeholder='Enter first name' type="text" {...firstName} />
        <input placeholder='Enter last name' type="text" value = {lastName.value} onChange={lastName.onChange}/>

        <div>
            <h4>First name : {firstName.value}</h4>
            <h4>last name : {lastName.value}</h4>
        </div>
    </div>
  )
}

export default Form