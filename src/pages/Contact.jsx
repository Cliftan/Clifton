import React from 'react';
import { color, motion } from 'framer-motion';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const handleclickGithub = () =>{
    window.open("https://github.com/Cliftan", "_blank");
  }
  const handleclickLinkedIn = () =>{
    window.open("https://www.linkedin.com/in/cliftan", "_blank");
  }
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="contact">
        <div className='container'>
          <button onClick={handleclickGithub}>
            <FontAwesomeIcon icon={faSquareGithub} size="10x" style={{color: "#74C0FC",}}/>
          </button>
          <button onClick={handleclickLinkedIn}>
            <FontAwesomeIcon icon={faLinkedin} size="10x" style={{color: "#74C0FC",}} />
          </button> 
          <h1>Contact Me</h1>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Your email" />
            <label>Message</label>
            <textarea placeholder="Your message"></textarea>
            <button type="submit">Send</button>
          </form>
          </div>
      </section>
    </motion.div>
  );
};

export default Contact;