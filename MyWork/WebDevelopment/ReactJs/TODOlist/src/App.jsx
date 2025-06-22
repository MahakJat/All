import React, { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [task, settask] = useState("");
  const [taskList, settaskList] = useState([]); //add empty array;

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      taskToDo: task.trim(), //task will have the value of the current task typyed and submitted // trim removes extra space
      id: nanoid(), //id to identify the every object if even there task is same;
    };

    if (task.trim()) {
      //if anything is there after triming means some task not empty spaces
      settaskList([...taskList, obj]); //adding the new array the ...taskList will give all the element of existing in the previous array and then current object will be added
      settask("");
    }
   //making input box empty after submission
  };

  const deleteHandler = ()=>{
    
  }

  return (
    <div className="p-[10vh]">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          value={task}
          onChange={(object) => {
            settask(object.target.value);
          }}
        />
        <button className="px-2 py-1 border border-black">Add</button>

        {/* adding taskList to frontend */}

        {taskList.length > 0 ? (
          taskList.map((elem) => (
            <div
              key={elem.id}
              className="bg-red-300 px-4 py-10 flex justify-center gap-5"
            >
              <h1 className="text-xl">{elem.taskToDo}</h1>
              <button className="px-2 py-1 border border-black" onClick={() => {

                const map = taskList.filter((e) => e.id != elem.id ) //if the current elem id != e.id then add to new array and the elem id wil not be added
                settaskList(map);

              }}>delete</button>
            </div>
          ))
        ) : (
          <h1>No task yet</h1>
        )}
      </form>
    </div>
  );
};

export default App;
