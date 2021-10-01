import React from "react";

const Taks = ({ task }) => {
  return (
    <li className="flex justify-between my-8">
      <p className="text-gray-200 font-bold">{task.title}</p>
      <div className="flex gap-1">
        <button>
          <i className="fas fa-pen p-2 text-gray-200 hover:text-blue-400"></i>
        </button>
        <button>
          <i className="fas fa-trash p-2 text-gray-200 hover:text-red-400"></i>
        </button>
      </div>
    </li>
  );
};

export default Taks;
