import React, { useState } from "react";
import { motion } from "framer-motion";

const timelineVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const Timeline = ({ data }) => {
  const [open, setOpen] = useState(false);
  const sortedData = data?.sort((a, b) => a.sequence - b.sequence);
  const handleClick = (index) => {
    setOpen(index === open ? null : index);
  };
  return (
    <>
      {sortedData &&
        sortedData.map((d, index) => {
          const startDate = new Date(d?.startDate);
          const endDate = new Date(d?.endDate);
          const startDateFormatted = ` ${startDate.getFullYear()}`;
          const endDateFormatted = `${endDate.getFullYear()}`;
          return (
            <motion.div
              key={d._id}
              className="timeline_container"
              onClick={() => handleClick(index)}
              variants={timelineVariants}
              initial="initial"
              whileInView="animate"
            >
              <motion.h2 variants={timelineVariants} className="company_name">
                {d.company_name}
              </motion.h2>
              <motion.div variants={timelineVariants} className="timeline_desc">
                <p className="job_title">{d.jobTitle}</p>
                <p className="job_date">
                  {startDateFormatted} - {endDateFormatted} , {d.jobLocation}
                </p>
              </motion.div>
              <div>
                <p
                  className="see_more_details"
                  onClick={() => handleClick(index)}
                >
                  {open === index ? "-" : "+"}
                </p>
              </div>
              <motion.div
                variants={timelineVariants}
                initial="initial"
                whileInView="animate"
                className={`timeline_details ${
                  open === index ? "timeline_details_active" : ""
                }`}
              >
                <motion.p
                  variants={timelineVariants}
                  className="timeline_summary"
                >
                  {d?.summary
                    ? d.summary
                    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eligendi incidunt tenetur?"}
                </motion.p>

                <motion.ul
                  variants={timelineVariants}
                  className="bullet_points"
                >
                  {d?.bulletPoints?.map((points, index) => (
                    <li className="bullet_point" key={index}>
                      {points}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          );
        })}
    </>
  );
};

export default Timeline;
