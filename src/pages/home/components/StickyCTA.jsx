import React from "react";
import { Phone } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <ScrollLink
        to="contact"
        smooth={true}
        offset={-80}
        duration={800}
        className="flex items-center cursor-pointer  gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform"
      >
        <Phone className="w-5 h-5" />
        <span>Book a Call</span>
      </ScrollLink>
    </div>
  );
};

export default StickyCTA;
