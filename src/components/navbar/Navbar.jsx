import React from "react";
import "./navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <Sidebar />
    </nav>
  );
};

export default Navbar;
