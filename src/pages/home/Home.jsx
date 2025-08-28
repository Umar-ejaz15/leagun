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

const Home = () => {
  return (
    <div className="">
      {/* Floating CTA */}
      <StickyCTA />

      {/* Hero Section */}
      <Hero />

      {/* Client Logos */}
      <ClientLogos />

      {/* Key Metrics */}
      <Matrices />

      {/* About Section */}
      <About />

      {/* Why Choose Us */}
      <WhyUs />

      {/* How It Works */}
      <HowItWorks />

      {/* Services Section */}
      <Services />

      {/* Case Studies */}
      <CaseStudies />

      {/* Client Reviews */}
      <Reviews />

      {/* FAQ Section */}
      <Faq3 />

      {/* Pricing */}
      <Pricing />

      {/* Final Bold CTA */}
      <Final />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
