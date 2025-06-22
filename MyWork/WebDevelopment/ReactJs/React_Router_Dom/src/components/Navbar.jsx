import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-6 items-center">
      <h2>Sheryian</h2>
      <div className="flex gap-4 items-center">
        {/* Corrected paths to match React Router routing */}
        {/* why a tag we can do routing but by this way every time we will change page reloading will be done  to avoid that we can use <link> tags */}
        {/* <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/courses" className="hover:underline">Courses</a>
        <a href="/services" className="hover:underline">Services</a> */}

        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;
