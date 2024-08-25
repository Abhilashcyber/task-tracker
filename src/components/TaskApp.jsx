import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const updateTask = (id, updatedText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: updatedText } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="task-app">
      <h1>Task Tracker</h1>
      <TaskForm taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TaskApp;
