import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/scroll";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogContent from "./Components/Blog/BlogContent";
import About from "./Pages/About";
import Trainer from "./Pages/Trainer";
import TrainerContent from "./Components/Trainer/TrainerContent";
import Contact from "./Pages/Contact";
import TestimonialPage from "./Pages/TestimonialPage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trainer/:id" element={<TrainerContent />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogContent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
      </Routes>
    </>
  );
};

export default App;
