// src/pages/TaskListPage.js
import React, { useEffect, useState } from "react";
import { getAllTasks, deleteTask } from "../services/TaskService";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getAllTasks();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.status}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskListPage;
