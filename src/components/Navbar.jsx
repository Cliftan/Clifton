import React from "react";

const Navbar = ({ onLinkClick, toggleDarkMode, darkMode, activePage }) => {
  return (
    <header>
      <nav className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
        <ul className="nav-links">
          <li>
            <button
              onClick={() => onLinkClick(0)}
              className={activePage === 0 ? "active" : ""}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => onLinkClick(1)}
              className={activePage === 1 ? "active" : ""}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => onLinkClick(2)}
              className={activePage === 2 ? "active" : ""}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => onLinkClick(3)}
              className={activePage === 3 ? "active" : ""}
            >
              Contact
            </button>
          </li>
        </ul>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
