import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <div className="navbar">
      <h2>TaskManager Pro</h2>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    </div>
  );
};

export default Navbar;