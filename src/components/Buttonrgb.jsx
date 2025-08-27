import React from "react";

const Buttonrgb = ({txt}) => {
  return (
    <button className="">
      <a
        href="/contact"
        className="inline-block rounded-md b border border-purple-600 px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-purple-600 hover:text-white hover:opacity-90 transition"
      >
      {txt}
      </a>
    </button>
  );
};

export default Buttonrgb;
