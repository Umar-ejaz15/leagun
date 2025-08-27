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

const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />
      <Matrices/>

      {/* About Section */}
      <About />

      {/* Why Choose Us */}
      <WhyUs />

      {/* How It Works */}
      <HowItWorks />

      {/* Services Section */}
      <Services />

      {/* Client Reviews */}
      <Reviews />

      {/* FAQ Section */}
      <Faq3 />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
