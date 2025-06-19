import React, { useContext } from "react";
import { TodoContext } from "./TodoListContext/TodoContext";

const Task = ({data,id,setTask}) => {
 const {dispatch} = useContext(TodoContext);

  return (
    <div className="task">
      <p>{data}</p>
      <div className="update-delete-btn">   
        <i  className="ri-edit-line"
        onClick={()=>{
          setTask(data);
          dispatch({type:'delete',id:id})
        }}
        ></i>
        <i onClick = {()=>{
             dispatch({type:'delete',id:id})
        }} className="ri-delete-bin-line"></i>
      </div>
    </div>
  );
};

export default Task;
