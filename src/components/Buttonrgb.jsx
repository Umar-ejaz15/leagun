import React from "react";

const Buttonrgb = ({txt}) => {
  return (
      <a
        href="#contact"
        className="inline-block text-lg rounded-md  b border border-purple-600 px-6 py-2  font-semibold text-gray-800 hover:bg-purple-600 hover:text-white hover:opacity-90 transition"
      >
      {txt}
      </a>
  );
};

export default Buttonrgb;
