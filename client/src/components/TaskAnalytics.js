import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const TaskAnalytics = ({ tasks }) => {
  const low = tasks.filter(t => t.priority === "Low").length;
  const medium = tasks.filter(t => t.priority === "Medium").length;
  const high = tasks.filter(t => t.priority === "High").length;

  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;

  const priorityData = [
    { name: "Low", value: low },
    { name: "Medium", value: medium },
    { name: "High", value: high },
  ];

  const completionData = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  const COLORS = ["#4ade80", "#facc15", "#f87171"];

  return (
    <div className="card analytics-card">
      <h3 style={{ marginBottom: "20px" }}>Task Analytics</h3>

      <div style={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={priorityData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ height: 250, marginTop: 30 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={completionData}
              dataKey="value"
              outerRadius={80}
              label
            >
              {completionData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TaskAnalytics;