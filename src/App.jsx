import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
  const handleclickGithub = () => {
    window.open("https://github.com/Cliftan", "_blank");
  };
  const handleclickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/cliftan", "_blank");
  };

  return (
    <div className="container-fluid">
      <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Navbar
          onLinkClick={setCurrentPage}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          activePage={currentPage}
        />
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <div>{React.createElement(pages[currentPage])}</div>
        </motion.div>

        <div className="navigation-buttons">
          <button className="prev" onClick={() => setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length)}>
            <FontAwesomeIcon icon={faCaretLeft} size="3x" />
          </button>
          <button className="next" onClick={() => setCurrentPage((prevPage) => (prevPage + 1) % pages.length)}>
            <FontAwesomeIcon icon={faCaretRight} size="3x" />
          </button>
        </div>

        <div className='side-items'>
          <ul className='logo'>
            <li>
              <button onClick={handleclickGithub}>
                <FontAwesomeIcon icon={faSquareGithub} size="2x" style={{color: "#74C0FC",}} className='icons'/>
              </button>
            </li>
            <li>
              <button onClick={handleclickLinkedIn}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "#74C0FC",}}  className='icons'/>
              </button>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
