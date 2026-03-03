import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById, updateTask } from "../services/api";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Hooks MUST be inside component
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    const fetchTask = async () => {
      const res = await getTaskById(id);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPriority(res.data.priority);
    };

    fetchTask();
  }, [id]);

 const handleUpdate = async (e) => {
  e.preventDefault();

  const existingTask = await getTaskById(id);

  await updateTask(id, {
    title,
    description,
    priority,
    completed: existingTask.data.completed, // preserve completed status
  });

  navigate("/");
};

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleUpdate} className="task-form-column">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button type="submit">Update Task</button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;