import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Taks from "./Taks";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <>
      {tasks.length ? (
        <ul className="overflow-y-scroll max-h-96" style={{}}>
          {tasks.map((task) => (
            <Taks task={task} key={task.id} />
          ))}
        </ul>
      ) : (
        <h2 className="mt-8 text-gray-200 text-center">Sem Tasks</h2>
      )}
    </>
  );
};

export default TaskList;
