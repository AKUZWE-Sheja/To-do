import React from "react";

const FilterTasks = ({ showCompleted, handleToggleShowCompleted, handleClearCompleted }) => {
  return (
    <div>
      <label className="ml-4">
        Show completed tasks:
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={handleToggleShowCompleted}
          className="my-6 mr-4 ml-1"

        />
      </label>
      <button className="p-1 rounded bg-teal-900 ml-4 text-white" onClick={handleClearCompleted}>Clear Completed Tasks</button>
    </div>
  );
};

export default FilterTasks;
