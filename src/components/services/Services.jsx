import React, { useRef } from "react";
import "./services.css";
import { motion, useInView } from "framer-motion";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

const Services = ({ data }) => {
  //   const ref = useRef();
  //   const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.section
      className="services section"
      id="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      //   ref={ref}
      //   animate={isInView && "animate"}
    >
      <motion.div variants={variants}>
        <motion.h1 variants={variants} className="title">
          what i do
        </motion.h1>
        <motion.h2 variants={variants} className="subtitle">
          my services
        </motion.h2>
      </motion.div>
      <motion.div variants={variants} className="services_container">
        <Swiper
          className="service_swiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
        >
          {data &&
            data.map((service) => (
              <SwiperSlide
                variants={variants}
                key={service._id}
                className="service_swiper_slide"
              >
                <div className="service_wrapper">
                  <div className="service_img_wrapper">
                    <img
                      src={service.image.url}
                      alt=""
                      className="service_img"
                    />
                  </div>
                  <div className="service_details_wrapper">
                    <div className="service_name">{service.name}</div>
                    <div className="service_desc">{service.desc}</div>
                    <div className="service_charge">{service.charge}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Services;
