import React, { useState } from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarCustom = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

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

            {/* Projects Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button
                className="dropdown-toggle"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              >
                Projects ▼
              </button>
              {isProjectsOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/">Customer rating</a></li>
                  <li><a href=" #">eState</a></li>
                  <li><a href="#project3x"></a></li>
                </ul>
              )}
            </li>
            <li>
              {!isAuthenticated ? (
                <button className="login-btn" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
              ) : (
                <button
                  className="logout-btn"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCustom;
