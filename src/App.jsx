import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogContent from "./Components/Blog/BlogContent";
import About from "./Pages/About";
import Trainer from "./Pages/Trainer";
import TrainerContent from "./Components/Trainer/TrainerContent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/trainer/:id" element={<TrainerContent />} />
      <Route path="/trainer" element={<Trainer />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogContent />} />
    </Routes>
  );
};

export default App;
