import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Home from "./components/home/Home";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);

  // --------------------data-------------------------------------------
  useEffect(() => {
    const getData = async () => {
      try {
        const api = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const response = await api.json();
        setData(response.user);
        console.log(response.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);
  // ----------------------mouse-----------------------------------------
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        className="hover-circle"
        style={{ left: position.x - 15, top: position.y - 15 }}
      ></div>
      <Navbar />
      <div className="App">
        <Home data={data} />
        {/* <Hero data={data} /> */}
        <About data={data?.timeline} />
        <Services data={data?.services} />
        <Skills data={data?.skills} />
        <Portfolio data={data?.projects} />
        <Testimonials data={data?.testimonials} />
        <Contact data={data} />
      </div>
      <Footer />
    </>
  );
};

export default App;
