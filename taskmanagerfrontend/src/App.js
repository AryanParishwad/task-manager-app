// App.js
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { createTask, updateTask } from "./services/TaskService";
import "./App.css";

function App() {
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleSave = async (task) => {
    if (task.id) {
      await updateTask(task.id, task);
    } else {
      await createTask(task);
    }
    setTaskToEdit(null);
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="container">
      <h1>Task Management App</h1>
      <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <TaskList onEdit={handleEdit} />
    </div>
  );
}

export default App;
