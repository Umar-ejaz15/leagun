import React from "react";
import { Title, Meta, Link } from "react-head";

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
import MarketingGuide from "./components/MarketingGuide";

const Home = () => {
  return (
    <div>
      {/* 🔥 SEO with react-head */}
      <Title>Leagun | Lead Generation Marketing Company</Title>
      <Meta
        name="description"
        content="Leagun is a results-driven lead generation marketing company helping businesses scale with targeted strategies, high-quality leads, and proven growth solutions."
      />
      <Meta
        name="keywords"
        content="Leagun, lead generation, marketing company, business growth, B2B leads, digital marketing, sales funnel, demand generation"
      />
      <Meta name="author" content="Leagun" />

      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.leagun.com/" />
      <Meta property="og:title" content="Leagun | Lead Generation Marketing Company" />
      <Meta
        property="og:description"
        content="Leagun helps businesses grow with expert lead generation strategies and marketing solutions tailored to your goals."
      />
      <Meta property="og:image" content="/logo.jpg" />

    

      {/* Favicon (optional extra) */}
      <Link rel="icon" href="/logo.jpg" />

      {/* Sticky CTA */}
      <StickyCTA />
<div className="overflow-hidden">

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

      {/* Newsletter Section (Optional) */}
      {/* <Newsletter /> */}
    </div>
</div>

  );
};

export default Home;
