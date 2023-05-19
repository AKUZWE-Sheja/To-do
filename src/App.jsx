import React, { useState } from "react";
import './index.css'
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import FilterTasks from "./components/FilterTasks";

const initialTasks = [
  { id: 1, name: "Learn React", completed: false },
  { id: 2, name: "Build a ToDo List app", completed: true },
];

export default function App() {
  // const [tasks, setTasks] = useState(initialTasks); if I wanted intial tasks set
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const handleNewTaskChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskName("");
  };

  const handleEditTask = (id, newName) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: newName,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleCompleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };

  const handleToggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const handleClearCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  const filteredTasks = showCompleted
    ? tasks.filter((task) => task.completed)
    : tasks.filter((task) => !task.completed);

  return (
    <div className="App  font-serif">
      <h1 className="text-4xl text-center text-teal-800">To Do List</h1>
      <NewTask
        newTaskName={newTaskName}
        handleNewTaskChange={handleNewTaskChange}
        handleAddTask={handleAddTask}
      />
      <TaskList
        tasks={filteredTasks}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />
      <FilterTasks
        showCompleted={showCompleted}
        handleToggleShowCompleted={handleToggleShowCompleted}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
}
