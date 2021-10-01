import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Taks from "./Taks";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  console.log(tasks);
  return (
    <>
      <ul className="overflow-y-scroll max-h-96" style={{}}>
        {tasks.map((task) => (
          <Taks task={task} key={task.id} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
