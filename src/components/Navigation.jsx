import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Buttonrgb from "./Buttonrgb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Why Us", to: "whyus" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white backdrop-blur-md shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            <img src="/logo.jpg" className="w-10 md:w-20" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80} // adjust for navbar height
                spy={true}
                activeClass="text-purple-600"
                className="cursor-pointer relative text-gray-700 font-medium px-2 py-1 rounded-md 
                  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r 
                  hover:from-purple-500 hover:via-purple-700 hover:to-purple-400
                  after:block after:h-[2px] after:bg-purple-500 after:w-0 
                  hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Buttonrgb txt="Schedule a Call →" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition"
            >
              {isOpen ? "❌" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer text-gray-700 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-700 hover:to-purple-400 px-3 py-2 rounded-md transition-all font-medium"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
          <div className="py-5 flex justify-center">
            <Buttonrgb txt="Schedule a Call →" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
