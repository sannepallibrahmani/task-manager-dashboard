import React, { useState } from "react";
import { addTask } from "../services/api";
import { Pending } from "@mui/icons-material";

const TaskForm = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return alert("Title is required");

    await addTask({
      title,
      description,
      priority,
      completed: Pending,
    });

    setTitle("");
    setDescription("");
    setPriority("Low");
    refresh();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="task-form-column">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;