import React, { useState } from "react";
import "./Navbar.css";

const NavbarCustom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <a href="#" className="navbar-brand">
          MicroFrontend
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu */}
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li><a href="#action1">Home</a></li>
            <li><a href="#action2">About</a></li>
            <li><a href="#action3">Services</a></li>
            <li><a href="#action4">Other Project</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCustom;
