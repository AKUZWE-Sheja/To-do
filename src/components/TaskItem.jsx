import React from "react";

const TaskItem = ({ task, handleCompleteTask, handleDeleteTask, handleEditTask }) => {
  return (
    <li className="mb-4">
      <input
      className="mr-1"
        type="checkbox"
        checked={task.completed}
        onChange={() => handleCompleteTask(task.id)}
      />
      <span>{task.name}</span>
      <button className="p-2 rounded bg-teal-900 ml-4 text-white" onClick={() => handleDeleteTask(task.id)}>Delete</button>
      <button
      className="p-2 rounded bg-teal-900 ml-4 text-white"
        onClick={() => {
          const newName = prompt("Enter a new name:", task.name);
          if (newName !== null) {
            handleEditTask(task.id, newName);
          }
        }}
      >
        Edit
      </button>
    </li>
  );
};

export default TaskItem;
