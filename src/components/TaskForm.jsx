import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } =
    useContext(TaskListContext);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleClear = () => {
    clearList();
    setTitle("");
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="bg-gray-900 text-gray-200 p-2 rounded appearance-none focus:outline-none"
        placeholder="Adicionar Task..."
        required
      />
      <div className="flex justify-around">
        <button
          type="submit"
          className="p-2 rounded-lg text-gray-200 bg-gray-600 hover:bg-gray-700"
        >
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button
          onClick={() => handleClear()}
          type="button"
          className="p-2 rounded-lg text-gray-200 bg-gray-600 hover:bg-gray-700"
        >
          Limpar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
