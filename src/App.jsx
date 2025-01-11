import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogContent from "./Components/BlogContent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogContent />} />
    </Routes>
  );
};

export default App;
