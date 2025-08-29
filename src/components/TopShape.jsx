import React from "react";

const TopShape = () => {
  return (
    <div
      className="absolute left-0 top-1/3 -translate-x-1/2 
                 w-[35rem] h-[35rem] sm:w-[28rem] sm:h-[28rem] 
                 rounded-full 
                 bg-gradient-to-bl from-red-500 via-purple-600 to-pink-500 
                 blur-3xl opacity-40 
                 animate-morph-slow animate-spin-slow"
    />
  );
};

export default TopShape;
