import React from "react";
import { motion } from "framer-motion";
const modalVariant = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.6,
    },
  },
};
const Modal = ({ onClose, project }) => {
  return (
    <motion.div
      variants={modalVariant}
      initial="initial"
      whileInView="animate"
      className="modal_container"
    >
      <div className="modal_details">
        <motion.button variants={modalVariant} className="close_btn" onClick={onClose}>
          x
        </motion.button>

        <motion.h2  variants={modalVariant} className="project_title">{project.title}</motion.h2>
        <motion.div variants={modalVariant} className="modal_description_container">
          <div className="modal_img_wrapper">
            <img src={project.image.url} alt="" className="modal_img" />
          </div>
          <div className="modal_details_wrapper">
            <p className="modal_description">{project.description}</p>
            <div className="project_links">
              <a href={project.githuburl} target="_blank" className="link">
                GitHub Link
              </a>
              <a href={project.liveurl} target="_blank" className="link">
                Live Link
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Modal;
