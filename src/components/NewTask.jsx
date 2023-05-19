import React from "react";

const NewTask = ({ newTaskName, handleNewTaskChange, handleAddTask }) => {
  return (
    <div className="py-4">
      <input
        type="text"
        value={newTaskName}
        onChange={handleNewTaskChange}
        placeholder=" Enter a new task..."
        className="border-2 rounded-xl border-teal-400 text-center ml-4"
      />
      <button className="p-1 rounded bg-teal-900 ml-4 text-white" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default NewTask;
