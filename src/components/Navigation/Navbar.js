import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "transparent", color: "#006D77" }}
    >
      <div className="navbar-brand">Your Brand</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-icon">&#9776;</span>
      </button>
      <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/products" className="nav-item">
          Products
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
