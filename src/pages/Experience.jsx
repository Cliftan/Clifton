
import { motion } from "framer-motion";
import EComm from "../assets/E-Comm.png";
import BallonDrop from "../assets/Cannon-Drop-Shooter.png";
import Scraper from "../assets/Amazon-Web-Scraper.jpg";
import Slangtionary from "../assets/Slangtionary.png";
import SquadUp from "../assets/SquadUp.png";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="Experience">
        <div className="container">
          <h1>Technologies I have worked with:</h1>
          <div className="row">
            <div className="col">
              <h5>Frontend</h5>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="col">
              <h5>Backend</h5>
              <ul>
                <li>Python</li>
                <li>C/C++</li>
              </ul>
            </div>
            <div className="col">
              <h5>Other Languages and Tools</h5>
              <ul>
                <li>Git</li>
                <li>Windows</li>
                <li>Linux Ubuntu</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <h1>Projects:</h1>
          <div className="row mt-4 gx-5">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card hover-card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={SquadUp}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    SquadUp AI Powered Event Planner | School Project
                  </h5>
                  <p className="card-text">
                    Collaborated in a team of four to design and develop SquadUp, a web-based event planner using React, JavaScript, Gemini API and TicketMaster API allowing users to plan events based on user preferences and their location.
                  </p>
                  <a
                    href="https://cmpt-276-spring-2025.github.io/final-project-18-flowers/"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    <span class="button-text">View Website</span>
                    <span class="button-arrow">&raquo;</span>
                  </a>
                  <a
                    href="https://github.com/CMPT-276-SPRING-2025/final-project-18-flowers"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    <span class="button-text">View Project</span>
                    <span class="button-arrow">&raquo;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card hover-card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={EComm}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Web Based Emergency Reporting System | School Project
                  </h5>
                  <p className="card-text">
                    Collaborated in a team of five to design and develop a
                    web-based emergency reporting system for E-Comm using HTML,
                    CSS, JavaScript, and Leaflet API, enabling users to report
                    and track emergencies in real time.
                  </p>
                  <a
                    href="https://github.com/Cliftan/CMPT272-Project"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    <span class="button-text">View Project</span>
                    <span class="button-arrow">&raquo;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card hover-card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={BallonDrop}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Ballon Drop Shooter Web Game | School Project
                  </h5>
                  <p className="card-text">
                    Implemented gameplay mechanics using HTML, CSS, and
                    JavaScript, allowing balloons to fall from random positions
                    and the player to shoot them with a cannon, resulting in
                    smooth and engaging gameplay.
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/Cliftan/balloon-drop-shooter"
                    className="btn btn-primary btn-block"
                  >
                    <span class="button-text">View Project</span>
                    <span class="button-arrow">&raquo;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card hover-card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={Scraper}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Amazon Web Scraper | Side Project
                  </h5>
                  <p className="card-text">
                    A amazon webscraper app utilizing Python, BeautifulSoup from
                    bs4, Csv, Pandas, and Webdriver from Selenium Enter a search
                    for amazon and this program will search through amazon and
                    puts it all into a csv file and an excel file.
                  </p>
                  <a
                    href="https://github.com/Cliftan/Amazon-Webscrape"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    <span class="button-text">View Project</span>
                    <span class="button-arrow">&raquo;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="card hover-card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  src={Slangtionary}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Slangtionary | Hackathon</h5>
                  <p className="card-text">
                    The goal of this application is to define slang words
                    requested by the user and return them family-friendly. To
                    achieve this, we used HTML for the frontend formatting,
                    Urban Dictionary's API to define different slang terms, and
                    Flask for the backend. Works for sure on Windows and Mac.
                  </p>
                  <a
                    href="https://github.com/Cliftan/Mountain-Madness-2023"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    <span class="button-text">View Project</span>
                    <span class="button-arrow">&raquo;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;
