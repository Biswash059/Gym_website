import React from "react";
import Header from "../Components/Header";
import BgBlog from "../assets/img/BgBlog.jpg"
import HeroImage from "../assets/img/hero/bg.png";
import BlogList from "../Components/Blog/BlogList";
import Footer from "../Components/Footer";

const Blog = () => {
  return (
    <section>
      <div className=" w-full sm-overflow-x-hidden ">
        <Header />
        <div
          className=" relative min-h-screen bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="absolute block left-56 top-64 md:left-1/3 md:bottom">
            <h1 className="text-5xl font-bold  text-white">
              Home <span className="text-red-600">/Blogs</span>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <BlogList />
        <BlogList />
        <Footer />
      </div>
    </section>

  );
};

export default Blog;
