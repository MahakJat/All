import React from 'react'
import State from './PropsAndState/State'
import Props from './PropsAndState/Props'
import './index.scss'

import PropsProject from './PropsAndState/PropsMiniProject/PropsProject'
import StateProject from './PropsAndState/StateMiniProject/StateProject'
import Todo from './TodoList/Todo'
import ClickCounter from './HOc/ClickCounter'
import HoverCounter from './HOc/HoverCounter'
import Fruits from './HigherOrderComponentExample/Fruits'
import Veggies from './HigherOrderComponentExample/Veggies'
import MyComponent from './ClassComponent/MyComponent'
import ClassCounter from './ClassComponent/ClassCounter'

const App = () => {
  return (
    <div className='app'>
    {/* <ClassCounter/> */}
      {/* <State/> */}
      {/* <Props/> */}
      {/* <PropsProject/>  */}
      {/* <StateProject/> */}
      <Todo/>


      {/* higher order component */}
      {/* <div className='counter'>
        <ClickCounter/>
        <HoverCounter/>
      </div> */}

      {/* <div className='search'>
          <Fruits/>
          <Veggies/>
      </div> */}
    </div>
  )
}

export default App