import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  handleCompleteTask,
  handleDeleteTask,
  handleEditTask,
}) => {
  return (
    <ul className="ml-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
