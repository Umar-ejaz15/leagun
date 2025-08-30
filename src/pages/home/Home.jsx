import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Faq3 from "./components/FAQ";
import Footer from "./components/Footer";
import Matrices from "./components/Matrices";
import Newsletter from "./components/Newsletter";
import ClientLogos from "./components/ClientLogos";
import Pricing from "./components/Pricing";
import CaseStudies from "./components/CaseStudies";
import StickyCTA from "./components/StickyCTA";
import Final from "./components/Final";
import Form from "../contact/components/Form";

const Home = () => {
  return (
    <div className="">
      <StickyCTA />

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Metrics Section */}
      <Matrices />

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Why Us Section */}
      <div id="whyus">
        <HowItWorks />
      </div>

      {/* Case Studies Section */}
      <div id="casestudies">
        <CaseStudies />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Form />
      </div>

      {/* Newsletter Section */}
      {/* <Newsletter /> */}
    </div>
  );
};

export default Home;
