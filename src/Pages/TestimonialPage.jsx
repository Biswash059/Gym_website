import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TestimonialComponent from "../Components/Testimonials/TestimonialComponent";

const TestimonialPage = () => {
  return (
    <div className=" bg-slate-300">
      <Header />
      <TestimonialComponent />
      <Footer />
    </div>
  );
};

export default TestimonialPage;
