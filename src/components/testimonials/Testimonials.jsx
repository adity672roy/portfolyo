import React from "react";
import { motion } from "framer-motion";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

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

const Testimonials = ({ data }) => {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="testimonials section"
      id="testimonials"
    >
      <motion.div variants={variants}>
        <motion.h1 variants={variants} className="title">
          testimonials
        </motion.h1>
        <motion.h2 variants={variants} className="subtitle">
          what people says
        </motion.h2>
      </motion.div>

      {/* --------------------------- */}
      <motion.div variants={variants}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper testimonial_swiper"
        >
          {data &&
            data.map((testimonial) => (
              <SwiperSlide key={testimonial._id} className="swiper_slide">
                <div className="testimonial_container">
                  <img
                    src={testimonial.image.url}
                    alt=""
                    className="swiper-slide_img"
                  />
                  <div className="testimonial">
                    <p className="testimonial_name">{testimonial.name}</p>
                    <span className="testimonial_position">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
                <div className="testimonial_section">
                  <p className="testimonial_review">{testimonial.review}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
