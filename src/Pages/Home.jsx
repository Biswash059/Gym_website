import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Classes from "../Components/Classes";
import TrainerMeetSection from "../Components/TrainerMeetSection";
import Membership from "../Components/Membership";
import BmiCalc from "../Components/BmiCalc";
import Testimonials from "../Components/Testimonials"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Classes />
      <TrainerMeetSection />
      <Membership />
      <BmiCalc />
      <Testimonials />
    </>
  );
};

export default Home;
