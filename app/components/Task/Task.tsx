"use client";

import "./Task.scss";

type TaskType = {
  children: React.ReactNode;
};

const Task = ( { children }: TaskType ) => {
  
  return (
    <li className="Task">
      { children }
    </li>
  )
}

export default Task;