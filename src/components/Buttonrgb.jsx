import React from "react";

const Buttonrgb = ({txt}) => {
  return (
    <button className="">
      <a
        href="/contact"
        className="inline-block rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
      >
      {txt}
      </a>
    </button>
  );
};

export default Buttonrgb;
