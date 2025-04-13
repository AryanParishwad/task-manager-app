import React, { useEffect, useState } from "react";
import { getAllTasks, deleteTask } from "../services/TaskService";

export default function TaskList({ onEdit }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getAllTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("en-IN");
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{formatDate(task.dueDate)}</td>
                <td>{task.completed ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => onEdit(task)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
