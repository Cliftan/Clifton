import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';

const pages = [Home, About, Experience, Contact];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
  };

  const handleNavbarClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar 
        onLinkClick={handleNavbarClick} 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode} 
        activePage={currentPage} // Pass the currentPage to Navbar for active state
      />
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ type: 'spring', stiffness: 150 }}
      >
        <div>{React.createElement(pages[currentPage])}</div>
      </motion.div>

      <div className="navigation-buttons">
        <button className="prev" onClick={handlePreviousPage}>
          <FontAwesomeIcon icon={faCaretLeft} size="3x" />
        </button>
        <button className="next" onClick={handleNextPage}>
          <FontAwesomeIcon icon={faCaretRight} size="3x" />
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
