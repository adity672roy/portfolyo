import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};
const Hero = ({ data }) => {
  return (
    <motion.section
      className="home"
      id="home"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="home_left" variants={variants}>
        <motion.div className="home_top" variants={variants}>
          <p className="home_title">
            HELLO , <span className="home_subtitle">My name is </span>
          </p>
          <h2 className="home_name">{data?.about?.name}</h2>
          <p className="home_title">
            I AM <span className="home_subtitle">{data?.about?.title}</span>
          </p>
        </motion.div>
        <motion.div className="home_middle" variants={variants}>
          <p className="home_desc">{data?.about?.description}</p>
        </motion.div>
        <motion.div className="home_bottom" variants={variants}>
          <div className="social_handles">
            {data &&
              data?.social_handles?.map((social) => (
                <div className="social" key={social._id}>
                  <a href={social?.url}>
                    <img src={social.image.url} alt="" className="social_img" />
                  </a>
                </div>
              ))}
          </div>
          <div>
            <button className="download_btn">
              <p>Download CV</p>
            </button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="home_right" variants={variants}>
        <div className="img_wrapper">
          <img src={data?.about?.avatar?.url} alt="" className="avatar" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
