// src/components/TaskItem.js

import React, { useEffect, useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask, toggleComplete }) => {
  const [isDisappearing, setIsDisappearing] = useState(false);

  useEffect(() => {
    if (task.completed) {
      // Start the disappearing process
      setIsDisappearing(true);

      // After the animation ends, delete the task
      const timeout = setTimeout(() => {
        deleteTask(task.id);
      }, 500); // This should match the CSS transition duration

      // Cleanup timeout if the component unmounts early
      return () => clearTimeout(timeout);
    }
  }, [task.completed, deleteTask, task.id]);

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''} ${isDisappearing ? 'disappearing' : ''}`}>
      <div className="task-content">
        {!task.completed && (
          <button className="mark-done-btn" onClick={() => toggleComplete(task.id)}>
            Mark as Done
          </button>
        )}
        <input
          type="text"
          value={task.text}
          onChange={(e) => updateTask(task.id, e.target.value)}
          disabled={task.completed}
        />
      </div>
      <div className="task-actions">
        {task.completed && (
          <button className="undo-btn" onClick={() => toggleComplete(task.id)}>
            Undo
          </button>
        )}
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
