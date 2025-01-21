import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import CliftonImage from '../assets/Clifton.jpg'

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="home">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={CliftonImage}
                  alt="Clifton"
                  className="img-fluid"
                  loading="eager"
                />
              </div>
              <div className="col-md-6">
                <div class="home-text">
                  <h1>Hi there,</h1>
                  <h2 className="display-1">I'm Clifton</h2>
                  <p>Aspiring Fullstack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
