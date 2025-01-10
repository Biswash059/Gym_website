import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Classes from "../Components/Classes";
import TrainerMeetSection from "../Components/TrainerMeetSection";
import Membership from "../Components/Membership";
import BmiCalc from "../Components/BmiCalc";
import BlogSection from "../Components/BlogSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Classes />
      <TrainerMeetSection />
      <Membership />
      <BmiCalc />
      <BlogSection />
    </>
  );
};

export default Home;
