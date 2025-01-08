import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Classes from "../Components/Classes";
import TrainerMeetSection from "../Components/TrainerMeetSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Classes />
      <TrainerMeetSection />
    </>
  );
};

export default Home;
