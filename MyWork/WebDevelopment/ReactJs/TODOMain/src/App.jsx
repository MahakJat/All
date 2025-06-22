import { nanoid } from "nanoid";
import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      name: task,
      id: nanoid(),
    };
    const copyTask = [...allTasks, obj];
    setAllTasks(copyTask);
    setTask("");
  };

  const deleteFunction = (id) => {
    const filterArr = allTasks.filter((elem) => elem.id != id);
    setAllTasks(filterArr);
  };
  return (
    <div className="flex justify-center items-center bg-[#FFD583] h-screen ">

      <div className="bg-[#fff1d9] w-[30vw] h-[40vw] p-5 rounded-[5vh] shadow-lg">
      <h1 className="uppercase text-[#241f18] text-3xl text-center font-bold">to do list</h1>
        <form
          onSubmit={(e) => {
            //shortcut just write submitHandler
            submitHandler(e);
          }}
          className=" bg-[#ffd190] rounded-[5vh]  px-2 py-2 w-full  flex justify-between mt-5"
        >
          <input
            className=" w-5/6 focus:outline-none py-6 p-4 bg-transparent text-white h-8 text-xl  placeholder:text-white placeholder:text-xl "
            value={task}
            onChange={(elem) => {
              setTask(elem.target.value);
            }}
            type="text"
            placeholder="Enter task..."
          />
          <button className="ml-[2vh]  px-2 py-1 font-[gilroy] text-[2.5vh] bg-white rounded-full shadow-lg text-[#FFD190]"><i class="ri-add-line text-3xl font-bold"></i></button>
        </form>

        <div className="p-2 w-full mt-5 bg-[#FFDCAA] h-[53vh] rounded-[4vh] flex flex-col gap-2 ">
          {allTasks.map(function (elem) {
            return (
              <div className="flex gap-5 w-full justify-between items-center bg-[#FDFFF9] rounded-[4vh] p-2 shadow-lg">
                <h1 className="text-[#c89d60] text-[2.5vh]">{elem.name}</h1>
                <button
                  onClick={() => {
                    deleteFunction(elem.id); //pass elem.id
                  }}
                  className="px-2 py-1 rounded-full font-[gilroy] text-[2.5vh] bg-[#FFDCAA] shadow-lg"
                  style={{ boxShadow: "1px 4px 8px rgba(0, 0, 0, 0.2)" }}
                ><i class="text-white font-bold ri-close-large-line"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
