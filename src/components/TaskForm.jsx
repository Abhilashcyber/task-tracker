import React from 'react';

const TaskForm = ({ taskInput, setTaskInput, addTask }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
