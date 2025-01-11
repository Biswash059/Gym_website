import React from "react";
import Header from "../Components/Header";
import HeroImage from "../assets/img/hero/bg.png";
import BlogList from "../Components/BlogList";

const Blog = () => {
  return (
    <section>
      <div className=" w-full sm-overflow-x-hidden ">
        <Header />
        <div
          className=" relative min-h-screen bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="absolute right-1/2 bottom-1/2">
            <h1 className="text-5xl  text-white">
              Home <span className="text-red-600">/Blogs</span>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <BlogList />
        <BlogList />
      </div>
    </section>
  );
};

export default Blog;
