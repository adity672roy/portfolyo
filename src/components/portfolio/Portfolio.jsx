import React, { useState } from "react";
import { motion } from "framer-motion";
import "./portfolio.css";
import Modal from "./Modal";

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
const projectVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Portfolio = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const sortedProjects = data?.sort((a, b) => a.sequence - b.sequence);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="portfolio section"
      id="portfolio"
    >
      <motion.div variants={variants}>
        <motion.h1 variants={variants} className="title">
          portfolio
        </motion.h1>
        <motion.h2 variants={variants} className="subtitle">
          my work
        </motion.h2>
      </motion.div>

      <div className="portfolio_projects">
        {sortedProjects &&
          sortedProjects.map((project) => (
            <motion.div
              variants={projectVariants}
              initial="initial"
              whileInView="animate"
              className="project"
              key={project._id}
              onClick={() => openModal(project)}
            >
              <div className="project_img_wrapper">
                <img src={project.image.url} alt="" className="project_img" />
              </div>

              <div className="project_techstack">{project.techStack}</div>
              <p className="project_title">{project.title}</p>
              <div className="view_project">View Project</div>
            </motion.div>
          ))}
        {showModal && <Modal onClose={closeModal} project={selectedProject} />}
      </div>
    </motion.section>
  );
};

export default Portfolio;
