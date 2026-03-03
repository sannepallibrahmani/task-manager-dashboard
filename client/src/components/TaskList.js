import React from "react";
import TaskItem from "./TaskItem";
import { motion, AnimatePresence } from "framer-motion";

const TaskList = ({ tasks, refresh }) => {
  return (
    <AnimatePresence>
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <TaskItem task={task} refresh={refresh} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default TaskList;