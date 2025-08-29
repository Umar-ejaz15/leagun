import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div>
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
