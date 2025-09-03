import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Buttonrgb = ({ txt }) => {
  return (
    <div>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={800}
        className="cursor-pointer border border-purple-600 bg-white text-black 
                         hover:bg-purple-600 hover:text-white text-sm font-bold 
                         px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
      >
        <span>{txt}</span>
      </ScrollLink>
    </div>
  );
};

export default Buttonrgb;
