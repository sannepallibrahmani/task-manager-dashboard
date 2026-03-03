import React from "react";
import { motion } from "framer-motion";

const IncomeTracker = ({ tasks }) => {
  // Count statuses
  const pending = tasks.filter(t => t.status === "Pending").length;
  const inProgress = tasks.filter(t => t.status === "In Progress").length;
  const completed = tasks.filter(t => t.status === "Completed").length;

  const data = [pending, inProgress, completed];

  const max = Math.max(...data, 1); // prevent divide by zero

  return (
    <div className="card income-card">
      <div className="tracker-header">
        <h2>Task Performance Tracker</h2>
        <span className="tracker-percentage">
          {completed > 0
            ? `+${Math.round((completed / tasks.length) * 100)}%`
            : "0%"}
        </span>
      </div>

      <p className="tracker-subtitle">
        Overview of task status distribution
      </p>

      <div className="tracker-container">

        {data.map((value, index) => (
          <motion.div
            key={index}
            className="tracker-bar"
            initial={{ height: 0 }}
            animate={{ height: `${(value / max) * 160}px` }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          />
        ))}

      </div>

      <div className="tracker-labels">
        <span>Pending</span>
        <span>In Progress</span>
        <span>Completed</span>
      </div>
    </div>
  );
};

export default IncomeTracker;