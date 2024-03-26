import React from "react";
import "./footer.css";
import { motion } from "framer-motion";

const footerVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      straggerChildren: 0.4,
    },
  },
};
const Footer = () => {
  return (
    <motion.section
      className="footer"
      variants={footerVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="footer_container" variants={footerVariants}>
        <motion.p className="footer_desc" variants={footerVariants}>
          © 2024{" "}
          <motion.span variants={footerVariants} className="footer_name">
            JOHN
          </motion.span>
          . ALL RIGHTS RESERVED
        </motion.p>
        <motion.p variants={footerVariants} className="footer_desc">
          DEVELOPED BY{" "}
          <motion.span variants={footerVariants} className="footer_name">
            ADITY
          </motion.span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
