import React from "react";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Milstones from "./components/Milstones";
import Values from "./components/Values";
import Team from "./components/Team";
import Final from "../home/components/Final";
import Newsletter from "../home/components/Newsletter";

const About = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <Milstones />
      <Values />
      <Team />
      <Newsletter/>
      <Final />
    </div>
  );
};

export default About;
