import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTask] = useState([
    { title: "Ler o livro", id: 1 },
    { title: "Terminar o app", id: 2 },
    { title: "Ficar monstro", id: 3 },
    { title: "Ver o auxilio", id: 4 },
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
