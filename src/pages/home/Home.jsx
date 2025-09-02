import React from "react";
import { Title, Meta, Link } from "react-head";

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
      <Title>Leagun | Lead Generation Marketing Company</Title>
      <Meta
        name="description"
        content="Leagun helps local businesses in the USA & Canada grow with proven lead generation strategies and our Sales Growth Engine 🚀"
      />
      <Meta
        name="keywords"
        content="Leagun Technologies, Sales Growth Engine, lead generation USA, lead generation Canada, business growth, HVAC marketing, dental clinic marketing, med spa marketing, electrician marketing"
      />
      <Meta name="author" content="Leagun" />

      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.leagun.com/" />
      <Meta
        property="og:title"
        content="Leagun | Lead Generation Marketing Company"
      />
      <Meta
        property="og:description"
        content="Leagun helps local businesses in the USA & Canada grow with proven lead generation strategies."
      />
      <Meta property="og:image" content="https://www.leagun.com/logo.jpg" />

     

      {/* Favicon */}
      <Link rel="icon" type="image/png" href="/logo.jpg" />

      {/* Canonical */}
      <Link rel="canonical" href="https://www.leagun.com/" />

      {/* Favicon (optional extra) */}
      <Link rel="icon" href="/logo.jpg" />
      <link rel="canonical" href="https://leagun.com/" />

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
