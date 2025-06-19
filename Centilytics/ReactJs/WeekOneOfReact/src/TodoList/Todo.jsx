import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const Todo = () => {
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  const onSubmit = () => {
    if (task.trim() === "") {
      alert("Please add a task.");
      return;
    }
  
    const obj = {
      task: task,
      id: nanoid(),
    };

    const arr = [...allTask, obj];
    setAllTask(arr);
    setTask("");
  };

  const deleteTask = (id) => {
    const filterArr = allTask.filter((elem) => elem.id !== id);
    setAllTask(filterArr);
  };

  const updateTask = (id) => {
    const taskUpdate = allTask.find((elem) => elem.id === id);
    const filterArr = allTask.filter((elem) => elem.id !== id);
    setTask(taskUpdate.task);
    setAllTask(filterArr);
  };

  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <div className="todo-list-cart">
        <div className="input-add-btn">
          <div className="input-div">
            <input
              id="input-tag"
              type="text"
              value={task}
              placeholder="Create your task here...."
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </div>
          <button onClick={onSubmit}>Add</button>
        </div>
        <div className="task-list-div">
          {allTask.length > 0 ? (
            allTask.map(function (elem) {
              return (
                <div className="task" key={elem.id}>
                  <p>{elem.task}</p>
                  <div className="update-delete-btn">
                    <i
                      className="ri-edit-line"
                      onClick={() => updateTask(elem.id)}
                    ></i>
                    <i
                      className="ri-delete-bin-line"
                      onClick={() => deleteTask(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No tasks added yet.</p>
          )}

          {/* <div className="task">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              voluptatem!
            </p>
            <div className="update-delete-btn">
              <i class="ri-edit-line"></i>
              <i class="ri-delete-bin-line"></i>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Todo;
