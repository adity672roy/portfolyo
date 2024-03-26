import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    width: "400px",
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
  closed: {
    width: "0",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      initial={false}
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen}/>
      </motion.div>

      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
