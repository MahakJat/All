import React, { useState } from 'react'
import Parent from './PureComponentImp/Parent'
import Example from './StateAsSnapshot/example'

const App = () => {

  return (
    <div>
      <Parent/>
      <Example/>
    </div>
  )
}

export default App