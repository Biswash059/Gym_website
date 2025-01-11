import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import Classes from "../Components/Classes";
import TrainerMeetSection from "../Components/TrainerMeetSection";
import Membership from "../Components/Membership";
import BmiCalc from "../Components/BmiCalc";
import BlogSection from "../Components/BlogSection";
import Testimonials from "../Components/Testimonials"
import Footer from "../Components/Footer";
import Brands from "../Components/Brands";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <ToastContainer />
      <Hero />
      <AboutSection />
      <Classes />
      <TrainerMeetSection />
      <Membership />
      <BmiCalc />
      <Testimonials />
      <BlogSection />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
