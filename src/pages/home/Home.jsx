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
        content="Leagun Technologies, formerly Soft Stone Technologies, has been pushing boundaries for 3 years. We’ve tested a lot, failed a lot, and figured out what actually works. That’s how our Sales Growth Engine was born — not theory, but real strategies tested in the field.

Founded by Zain Noor, we focus on helping local businesses across the USA and Canada grow their sales. From HVAC companies to remodelers, dental clinics, med spas, electricians, and more, we partner with small and mid-sized businesses that want predictable, repeatable revenue.

Our mission is simple: to make sure local businesses don’t just survive, but grow, with systems that deliver visibility, leads, and consistent sales."
      />
      <Meta
        name="keywords"
        content="Leagun Technologies, Soft Stone Technologies, Zain Noor, Sales Growth Engine, business growth strategies, sales growth USA, sales growth Canada, local business marketing, lead generation USA, lead generation Canada, HVAC marketing, remodeler marketing, dental clinic marketing, med spa marketing, electrician marketing, small business sales growth, mid-sized business marketing, predictable revenue systems, repeatable revenue growth, local business visibility, increase local sales, marketing for service businesses, revenue growth solutions
"
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
        content="Leagun helps businesses grow with expert lead generation strategies and marketing solutions tailored to your goals."
      />
      <Meta property="og:image" content="/logo.jpg" />

      {/* Favicon (optional extra) */}
      <Link rel="icon" href="/logo.jpg" />

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
