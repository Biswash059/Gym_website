import React from "react";
import CustomHero from "../Components/CustomHero";
import AboutSection from "../Components/About/AboutSection";
import Founder from "../Components/About/Founder";
import Footer from "../Components/Footer";
import Achievements from "../Components/About/Achievements";
import Faqs from "../Components/About/Faqs";

const About = () => {
  return (
    <>
      <CustomHero link={"about"} text={"About"} />
      <AboutSection heading={"Why to Choose us"} />
      <Founder />
      <Achievements />
      <Faqs />
      <Footer />
    </>
  );
};

export default About;
