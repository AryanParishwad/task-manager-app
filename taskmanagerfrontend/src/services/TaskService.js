// src/services/TaskService.js
const API_BASE_URL = "http://localhost:8080/api/tasks";

export async function getAllTasks() {
  const response = await fetch(API_BASE_URL);
  return response.json();
}

export async function createTask(task) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

export async function updateTask(id, task) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

export async function deleteTask(id) {
  await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
}
