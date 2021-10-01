import React from "react";

const TaskForm = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <input
        type="text"
        className="bg-gray-900 text-gray-200 p-2 rounded-full appearance-none focus:outline-none"
        placeholder="Adicionar Task..."
        required
      />
      <div className="flex justify-around">
        <button
          type="submit"
          className="p-2 rounded-lg text-gray-200 bg-gray-600 hover:bg-gray-700"
        >
          Add task
        </button>
        <button className="p-2 rounded-lg text-gray-200 bg-gray-600 hover:bg-gray-700">
          Limpar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
