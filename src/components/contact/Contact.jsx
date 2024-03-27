import React from "react";
import { motion } from "framer-motion";
import "./contact.css";

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

const Contact = ({ data }) => {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="contact section"
      id="contact"
    >
      <motion.div variants={variants}>
        <motion.h1 variants={variants} className="title">
          contact me
        </motion.h1>
        <motion.h2 variants={variants} className="subtitle">
          feel free to reach me
        </motion.h2>
      </motion.div>

      <motion.div variants className="contact_container">
        <motion.div variants={variants} className="contact_details">
          <p className="contact_desc">{data?.about?.subTitle}</p>
          <div className="contact_address">
            <p> - Address</p>
            <span>{data?.about?.address}</span>
          </div>
          <div className="contact_email">
            <p> - Email</p>
            <span>{data?.email}</span>
          </div>
          <div className="contact_phone">
            <p> - Phone Number</p>
            <span>{data?.about?.phoneNumber}</span>
          </div>
        </motion.div>

        <motion.form variants={variants} action="" className="contact_form">
          <div className="input_container">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="email" className="input" placeholder="Email" />
          </div>
          <input type="text" className="input" placeholder="Subject" />
          <textarea
            cols="30"
            rows="5"
            className="input"
            placeholder="Message"
          ></textarea>
          <button className="contact_button">SEND</button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
