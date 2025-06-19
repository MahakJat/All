import React, { useContext, useState } from "react";
import Task from "./Task";
import { TodoContext } from "./TodoListContext/TodoContext";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("")
  
  return (
    <div className="todolist">
      <h1>TodoList</h1>
      <div className="todo-list-cart">
        {/* input btn */}
        <div className="input-add-btn">
          <div className="input-div">
            <input
              id="input-tag"
              type="text"
              value={task}
              placeholder="Create your task here...."
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <button onClick={()=>{
            dispatch({type:"add",data:task})
            setTask("")
          }}>Add</button>
        </div>

        <div className="task-list-div">{
           state.list.map((elem)=><Task data={elem.data} id = {elem.id} setTask = {setTask}/>)
          }</div>
      </div>
    </div>
  );
};

export default TodoList;
