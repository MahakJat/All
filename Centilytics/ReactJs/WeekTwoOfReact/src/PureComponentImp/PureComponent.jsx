import React from 'react'
import { memo } from 'react'

const PureComponent = memo(() => {
    console.log("pure component");
  return (
    <div>
        <h1>PureComponent</h1>
    </div>
  )
})

export default PureComponent