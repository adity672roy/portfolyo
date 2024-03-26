import React from "react";
import "./skills.css";
import { motion } from "framer-motion";

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
      staggerChildren: 0.1,
    },
  },
};
const skillVariant = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const Skills = ({ data }) => {
  const sortedSkills = data?.sort((a, b) => a.sequence - b.sequence);
  return (
    <motion.section
      className="skills section"
      id="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div variants={variants}>
        <motion.h1  variants={variants} className="title">what i am good at</motion.h1>
        <motion.h2  variants={variants} className="subtitle">my skills</motion.h2>
      </motion.div>
      <div className="skills_container">
        {sortedSkills &&
          sortedSkills.map((skill) => (
            <motion.div
              className="skill"
              key={skill._id}
              variants={skillVariant}
              initial="initial"
              whileInView="animate"
            >
              <div className="skill_detail">
                <div className="skill_section">
                  <img src={skill.image.url} alt="" className="skill_img" />
                  <p className="skill_name">{skill.name}</p>
                </div>
                <div className="skill_percentage">{skill.percentage} %</div>
              </div>
              <div className="skill_desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. veniam
                illo aspernatur. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </div>
              <div className="skill_progress_bg">
                <div
                  style={{ width: skill.percentage + "%" }}
                  className="skill_progress"
                ></div>
              </div>
            </motion.div>
          ))}
      </div>
    </motion.section>
  );
};

export default Skills;
