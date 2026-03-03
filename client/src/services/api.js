import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getTasks = () => API.get("/tasks");
export const addTask = (task) => API.post("/tasks", task);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const updateTask = (id, task) => API.put(`/tasks/${id}`, task);
export const getTaskById = (id) => API.get(`/tasks/${id}`);