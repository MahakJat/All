import React from 'react'
import TodoContextProvider from './TodoListContext/TodoContext'
import TodoList from './TodoList'

const TodoWrapper = () => {
  return (
   <TodoContextProvider>
      <TodoList/>
   </TodoContextProvider>
  )
}

export default TodoWrapper


