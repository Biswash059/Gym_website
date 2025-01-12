import React from "react";
import Header from "../Components/Header";
import BgBlog from "../assets/img/BgBlog.jpg"
import HeroImage from "../assets/img/hero/bg.png";
import BlogList from "../Components/BlogList";
import Footer from "../Components/Footer";
import CustomHero from "../Components/CustomHero";

const Blog = () => {
  return (
    <>
      <CustomHero link={"blog"} text={"Blogs"} />
      <BlogList />
      <BlogList />
      <Footer />
    </>
  );
};

export default Blog;
