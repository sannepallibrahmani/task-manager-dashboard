import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskAnalytics from "../components/TaskAnalytics";
import IncomeTracker from "../components/IncomeTracker";
import { getTasks } from "../services/api";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">

      {/* HEADER */}
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Dashboard</h1>
        <p>Manage your daily tasks efficiently and professionally.</p>
      </motion.div>

      <div className="dashboard-grid">

        {/* LEFT SIDE */}
        <div>

          <div className="card">
            <h2 style={{ marginBottom: "10px" }}>CHECK BOX</h2>
            <p style={{ color: "#9e9e9e", marginBottom: "20px" }}>
              Manage your tasks professionally.
            </p>

            {/* Updated TaskForm (with title, description, priority, status) */}
            <TaskForm refresh={fetchTasks} />

            <TaskList tasks={tasks} refresh={fetchTasks} />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* TASK OVERVIEW */}
          <motion.div
            className="card overview-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="overview-title">Task Overview</h3>

            <div className="overview-grid">

              {[
                {
                  label: "Total Tasks",
                  value: tasks.length,
                },
                {
                  label: "Pending",
                  value: tasks.filter(t => t.status === "Pending").length,
                },
                {
                  label: "In Progress",
                  value: tasks.filter(t => t.status === "In Progress").length,
                },
                {
                  label: "Completed",
                  value: tasks.filter(t => t.status === "Completed").length,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="overview-box"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p>{item.label}</p>
                  <h2>{item.value}</h2>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* ANALYTICS */}
          <TaskAnalytics tasks={tasks} />

          {/* PERFORMANCE TRACKER */}
          <IncomeTracker tasks={tasks} />

        </div>

      </div>
    </div>
  );
};

export default Home;