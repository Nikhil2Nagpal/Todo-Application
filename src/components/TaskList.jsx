import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";

const TaskList = ({ tasks, setTasks, setActivity, setUpdate, setEdit }) => {
  const handleRemove = (id) => {
    const filterItem = tasks.filter((item) => {
      return id !== item.id;
    });
    setTasks(filterItem);
  };

  const handleEdit = (id) => {
      const editItem = tasks.find((elem) => {
        return id === elem.id;
      }) 
      setActivity(editItem.title); 
      setUpdate(false);
      setEdit(id)
  }

  const handleAllRemove = () => {
    setTasks([]);
  };

  const [com, setCom] = useState(false)

  const handleCheck = (id) => {
    setTasks(tasks.map((compItem) => {
      if(compItem.id === id) {
        return {...compItem, completed:!compItem.completed }
      }
      return compItem;
    }))
  }

  
  return (
    <div>
      <ul>
        {tasks.map((taskList) => (
          <li
            className={`flex justify-between border-b-2 px-2 py-1 items-center ${taskList.completed?"line-through":""}`}
            key={taskList.id}
          >
            <div className="flex gap-3">
              <span className="cursor-pointer">
                <CiSquareCheck size={25} onClick={() => handleCheck(taskList.id)}/>
              </span>
              <span>{taskList.title}</span>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer">
                <FaEdit size={25} onClick={() => handleEdit(taskList.id)}/>
              </span>
              <span className="cursor-pointer" onClick={() => handleRemove(taskList.id)}>
                <MdDelete size={25} />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {
        tasks.length && <button className="border bg-[red] text-white px-2 py-2 rounded-md my-5 hover:bg-red-400" onClick={handleAllRemove}>Remove all</button>
      }
      
    </div>
  );
};

export default TaskList;
