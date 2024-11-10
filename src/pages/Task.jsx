import React, { useState } from 'react';
import './Task.css';
import { FaUser, FaSignOutAlt, FaEdit } from "react-icons/fa";

function Task() {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'To study React  fundamentals', done: true },
    { id: 2, task: 'To study JavaScript', done: true },
    { id: 3, task: 'To study CSS', done: true },
    { id: 4, task: 'To study HTML', done: true },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskId = tasks.length + 1;
      setTasks([
        ...tasks,
        { id: newTaskId, task: newTask, done: false },
      ]);
      setNewTask('');
    }
  };

  const toggleTaskDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <div className="user-section">
        <div className="user-profile">
          <div className="user-icon">
            <FaUser size={72} />
          </div>
          <div className="user-info">
            <p>Welcome Back, <strong>Sarah!</strong></p>
            <button className="edit-profile">
              <FaEdit /> Edit Profile
            </button>
            <button className="sign-out">
              <FaSignOutAlt /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="task-container">
        <h2>Tasks to do - {tasks.filter(task => !task.done).length}</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.done ? 'done' : ''}>
              <span onClick={() => toggleTaskDone(task.id)}>{task.task}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="add-task">
          <input
            type="text"
            value={newTask}
            onChange={handleNewTaskChange}
            placeholder="Add a new task"
          />
          <button onClick={addTask}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
