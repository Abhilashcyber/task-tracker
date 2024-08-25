// src/components/TaskItem.js

import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask, toggleComplete }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
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
