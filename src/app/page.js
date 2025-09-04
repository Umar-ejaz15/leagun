import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MarketingGuide from "@/components/MarketingGuide";
import Navigation from "@/components/Navigation";

import StickyCTA from "@/components/StickyCTA";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* Sticky CTA */}
      <StickyCTA />
      <Navigation />
      <div className="overflow-hidden ">
        {/* Hero Section */}
        <Hero />

        <MarketingGuide />

        <About />

        <CaseStudies />
        <HowItWorks />

        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
