import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  // Load saved theme from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Router>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

        {/* Page Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </motion.div>
      </Router>
    </div>
  );
}

export default App;