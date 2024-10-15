import React, { useState } from "react";
import TaskList from "./TaskList";
import todoImg from "../assets/todoImg.png";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(true);

  
  const [edit, setEdit] = useState(null);

  const handleUpdate = () => {
    if(activity === ""){
      alert('Please enter todo title');
      return;
    }
    if (!update) {
      setTasks(
        tasks.map((newEle) => {
          if (newEle.id === edit) {
            return { ...newEle, title: activity };
          }
          return newEle;
        })
      );
      setUpdate(true);
      setActivity('');
      setEdit(null);
    } else {
      const allActivity = { id: uuidv4(), title: activity, complete:false };
      setTasks([...tasks, allActivity]);
      setActivity("");
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-[80%] mx-auto flex flex-wrap">
            <div className="lg:w-1/2">
              <img
                src={todoImg}
                alt="study-img"
                className="w-full lg:h-auto h-64 object-cover object-center rounded"
              />
            </div>
            <div className="lg:w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 font-bold mb-5 text-center text-5xl">
                Todo
              </h2>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"
                  onChange={(e) => setActivity(e.target.value)}
                  value={activity}
                />
              </div>
              {update ? (
                <button
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleUpdate}
                  value={tasks}
                >
                  Add Todo
                </button>
              ) : (
                <button
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleUpdate}
                  value={tasks}
                >
                  Update Todo
                </button>
              )}

              <TaskList
                tasks={tasks}
                setTasks={setTasks}
                setActivity={setActivity}
                setUpdate={setUpdate}
                setEdit={setEdit}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
