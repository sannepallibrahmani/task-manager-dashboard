import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { updateTask, deleteTask } from "../services/api";

const TaskItem = ({ task, refresh }) => {
  // Change task status
  const changeStatus = async (newStatus) => {
    await updateTask(task.id, {
      ...task,
      status: newStatus,
    });
    refresh();
  };

  // Delete task
  const handleDelete = async () => {
    await deleteTask(task.id);
    refresh();
  };

  return (
    <motion.div
      className="task-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ flex: 1 }}>

        {/* 🔥 Task Header */}
        <div className="task-header">
          <span className="task-title">
            {task.title}
          </span>

          <span
            className={`status-badge ${
              task.status
                ? task.status.replace(" ", "").toLowerCase()
                : "pending"
            }`}
          >
            {task.status || "Pending"}
          </span>
        </div>

        {/* Description */}
        <p className="task-description">
          {task.description}
        </p>

        {/* Priority */}
        <div
          className={`priority-badge ${
            task.priority
              ? task.priority.toLowerCase()
              : "low"
          }`}
        >
          {task.priority || "Low"} Priority
        </div>
      </div>

      {/* Buttons Section */}
      <div className="task-buttons">

        {/* Status Controls */}
        <button onClick={() => changeStatus("Pending")}>
          Pending
        </button>

        <button onClick={() => changeStatus("In Progress")}>
          In Progress
        </button>

        <button onClick={() => changeStatus("Completed")}>
          Completed
        </button>

        {/* Edit Button */}
        <Link to={`/edit/${task.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="edit-btn"
          >
            Edit
          </motion.button>
        </Link>

        {/* Delete Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TaskItem;