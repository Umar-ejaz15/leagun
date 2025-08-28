import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttonrgb from "./Buttonrgb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white backdrop-blur-md shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl rounded-full font-bold text-gray-800">
            <img src="/logo.jpg" className="w-10 roundfu md:w-20" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-700 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-700 hover:to-purple-400 transition-all font-medium px-2 py-1 rounded-md"
              >
                {link.name}
              </Link>
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
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-700 hover:to-purple-400 px-3 py-2 rounded-md transition-all font-medium"
              >
                {link.name}
              </Link>
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
