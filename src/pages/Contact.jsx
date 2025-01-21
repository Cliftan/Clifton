import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Your email" />
          <label>Message</label>
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;