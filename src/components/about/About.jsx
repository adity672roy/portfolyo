import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import Timeline from "./Timeline";

const variants = {
  initial: {
    x: -100,
    y: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const About = ({ data }) => {
    const experience = data?.filter((item) => !item.forEducation);
    const education = data?.filter((item) => item.forEducation);
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="about section"
      id="about"
    >
      <motion.div variants={variants}>
        <motion.h1 variants={variants} className="title">
          about me
        </motion.h1>
        <motion.h2 variants={variants} className="subtitle">
          education & experience
        </motion.h2>
      </motion.div>

      <motion.div variants={variants} className="about_timeline">
        <motion.div variants={variants} className="education">
            <h2 className="about_title">Education</h2>
          <Timeline data={education} />
        </motion.div>
        <motion.div variants={variants} className="experience">
            <h2 className="about_title">Experience</h2>
          <Timeline data={experience} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
