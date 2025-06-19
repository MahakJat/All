import React, { useState } from 'react'

const useFormInput = (initialValues) => {
  const [value, setValue] = useState(initialValues);

  function handleChange(e){
    setValue(e.target.value);
  }

  const inputValue = {
    value:value,
    onChange:handleChange
  }
  return (
    inputValue
  )
}

export default useFormInput