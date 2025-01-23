import React from 'react';
import { motion } from 'framer-motion';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eedfe497-69b8-4ea4-ad81-60cc111a5865");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="contact">
        <div className='container'>
          <h1>Contact Me</h1>
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder='Name' required/>
            <label>Email</label>
            <input type="email" name='email' placeholder="Your email" required/>
            <label>Message</label>
            <textarea placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;