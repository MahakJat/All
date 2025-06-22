import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-2">
      <h1>Sheriyans</h1>
      <div className="flex items-center gap-14">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-purple-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? "text-purple-500" : "")}
        >
          Courses
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-purple-500" : "")}
        >
          Product
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-purple-500" : "")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
