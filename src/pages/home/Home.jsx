import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import CaseStudies from "./components/CaseStudies";
import StickyCTA from "./components/StickyCTA";
import Form from "../contact/components/Form";
import MarketingGuide from "./components/MarketingGuide";

const Home = () => {
  return (
    <div>
      {/* Sticky CTA */}
      <StickyCTA />
      <div className="overflow-hidden ">
        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>

        {/* Marketing Guide / Metrics */}
        <MarketingGuide />

        {/* About Section */}
        <div id="about">
          <About />
        </div>

        {/* Why Us Section */}

        <div id="casestudies">
          <CaseStudies />
        </div>
        {/* Case Studies Section */}
        <div id="whyus">
          <HowItWorks />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <Form />
        </div>

        {/* Newsletter Section (Optional) */}
        {/* <Newsletter /> */}
      </div>
    </div>
  );
};

export default Home;
