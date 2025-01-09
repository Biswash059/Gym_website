import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Classes from "../Components/Classes";
import TrainerMeetSection from "../Components/TrainerMeetSection";
import Membership from "../Components/Membership";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Classes />
      <TrainerMeetSection />
      <Membership />
    </>
  );
};

export default Home;
