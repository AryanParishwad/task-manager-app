import React, { useState, useEffect } from "react";
import { createTask, updateTask } from "../services/TaskService";

const initialFormState = {
  title: "",
  description: "",
  dueDate: "",
  status: "TODO",
  completed: false,
};

export default function TaskForm({ taskToEdit, setTaskToEdit }) {
  const [task, setTask] = useState(initialFormState);

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask(initialFormState);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.id) {
      await updateTask(task.id, task);
    } else {
      await createTask(task);
    }
    setTask(initialFormState);
    setTaskToEdit(null);
    window.location.reload(); // TEMP: Refresh the list (replace with prop callback in future)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task.id ? "Edit Task" : "Add Task"}</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="ON_HOLD">ON_HOLD</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="completed"
          checked={task.completed}
          onChange={handleChange}
        />
        Completed
      </label>
      <button type="submit">{task.id ? "Update" : "Add"}</button>
    </form>
  );
}
