<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 11d5ed47d0ad5719bd2bf87a8630da4a0f79e790
import BlogList from "../Components/Blog/BlogList";
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
