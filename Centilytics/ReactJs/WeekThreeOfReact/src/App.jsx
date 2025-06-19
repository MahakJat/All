import React from 'react'
import Counter from './Assignments/Counter/Counter'
import ArrayUpdation from './HowDoUpdatingArrayWorksInState/ArrayUpdation'
import ObjectUpdation from './HowDoUpdatingObjectWorks/ObjectUpdation'
import KeepNotes from './Assignments/KeepNotes/KeepNotes'
import KeepNotesWrapped from './Assignments/KeepNotes/KeepNotesWrapped'
import TodoWrapper from './Assignments/TodoList/TodoWrapper'
import Scoreboard from './PreservingState/Scoreboard'
import ScoreboardReset from './ResettingStates/ScoreboardReset'

const App = () => {
  return (
    <div>
      <ArrayUpdation/>
      <ObjectUpdation/>
      <Scoreboard/>
      <ScoreboardReset/>
      <Counter/>
      <KeepNotesWrapped/>
      <TodoWrapper/>
    </div>
  )
}

export default App




