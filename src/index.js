import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/portfolio" element={<Portfolio />} />
      <Route path="/pages/about" element={<About />} />
      <Route path="/pages/cv" element={<Cv />} />
      <Route path="/pages/contact" element={<Contact />} />
    </Routes>
  </Router>
);
