// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskClick = (index) => {
    setSelectedTask(index);
  };

  return (
    <div className="app">
      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={selectedTask === index ? "selected-task" : ""}
            onClick={() => handleTaskClick(index)}
          >
            {task}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
