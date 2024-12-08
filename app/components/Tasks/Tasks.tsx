"use client";

import "./Tasks.scss";

type TasksType = {
  children: React.ReactNode;
};

const Tasks = ( { children }: TasksType ) => {
  
  return (
    <ul className="Tasks">
      { children }
    </ul>
  )
}

export default Tasks;