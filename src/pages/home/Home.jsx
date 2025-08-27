import React from "react";
import Hero from "./components/Hero";
import Video from "./components/Video";
import About from "./components/About";
import Faq3 from "./components/FAQ";
import LocomotiveScroll from "locomotive-scroll";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Hero />
      <About />
      <WhyUs/>
      <HowItWorks/>
      <Faq3 />

      {/* <Video/> */}
    </div>
  );
};

export default Home;
