import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="about">
        <div className="container">
          <h1>About Me</h1>
          <p>
            As a third-year Computing Science student at Simon Fraser
            University, I am eager to delve into the world of technology and
            learn how to design and develop innovative solutions. I am highly
            motivated, driven, and always seeking new opportunities to expand my
            knowledge and skills in the field.
            <br />
            <br />I have a strong foundation in programming, data structures and
            algorithms, with experience coding in Python, C, HTML, CSS and
            JavaScript. I am a quick learner and am able to work efficiently in
            a team or individually.
            <br />
            <br />I am particularly interested in web development, software
            engineering, and emerging technologies like augmented reality. My
            goal is to leverage my technical skills to build impactful
            applications that enhance user experiences and solve complex
            challenges.
            <br />
            <br />
            In my free time, I enjoy developing personal projects, such as web
            development and applications, to challenge myself and apply what I
            have learned in class.
            <br />
            <br />I am excited to continue my academic journey at Simon Fraser
            University and to contribute to the technology community by
            providing creative and effective solutions to real-world problems.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
