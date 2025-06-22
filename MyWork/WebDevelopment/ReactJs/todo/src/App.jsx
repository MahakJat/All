import React, { useState } from 'react'

const App = () => {
  const [task, settask] = useState();
  const [taskList, settaskList] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault();
    const newArr = [...taskList , task];
    settaskList(newArr);
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" className='border border-black' onChange={(object) =>
          settask(object.target.value)
        } value = {task}/>
        <button className='border border-black' >submit</button>
      </form>
      <div>
         {
           taskList.filter((elem) => {
            return <h1>{elem}</h1>
           })
         }
      </div>
    </div>
  )
}

export default App