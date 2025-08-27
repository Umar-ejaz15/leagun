import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Buttonrgb from "./Buttonrgb";

const Navigation = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50  shadow-sm">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-6 py-4 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              LeadGun
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          <Link
            to="/"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:via-purple-600 after:to-pink-600 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:via-purple-600 after:to-pink-600 hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:via-purple-600 after:to-pink-600 hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium text-gray-700 hover:text-indigo-600 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:via-purple-600 after:to-pink-600 hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Buttonrgb txt="Book a Call" />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <dialog id="mobile-menu" className="backdrop:bg-black/40 lg:hidden">
        <div tabIndex="0" className="fixed inset-0 focus:outline-none">
          <div className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white shadow-lg p-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold text-gray-900">LeadGun</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <Link
                to="/"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-50"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md hover:opacity-90 transition">
                Book a Call →
              </Button>
            </div>
          </div>
        </div>
      </dialog>
    </header>
  );
};

export default Navigation;
