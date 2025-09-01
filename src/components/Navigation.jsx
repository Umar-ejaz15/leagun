"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dock } from "@/components/magicui/dock";
import { Link as ScrollLink } from "react-scroll";
import { HomeIcon, InfoIcon, UserCheckIcon, PhoneIcon, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const DATA = [
  { href: "home", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
  { href: "about", label: "About", icon: <InfoIcon className="w-5 h-5" /> },
  { href: "whyus", label: "Why Us", icon: <UserCheckIcon className="w-5 h-5" /> },
  { href: "contact", label: "Contact", icon: <PhoneIcon className="w-5 h-5" /> },
];

export default function Navigation() {
  return (
    <motion.div
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] px-4 w-full md:w-auto"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <TooltipProvider>
        <Dock
          direction="middle"
          className="gap-5 px-4 py-2 bg-white w-full md:w-[850px] 
          backdrop-blur-md rounded-xl shadow-lg transition-all duration-300 
          flex justify-between items-center border border-gray-200/40"
        >
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <img src="/logo.jpg" alt="Leagun Logo" className="h-10 w-auto" />
          </motion.h1>

          <Separator orientation="vertical" className="h-6 hidden sm:block" />

          {/* Navigation Links */}
          <div className="flex items-center gap-3 md:gap-5">
            {DATA.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
              >
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="group cursor-pointer text-gray-800 font-semibold 
                  relative hover:text-purple-600 transition-all duration-300 
                  flex items-center gap-1"
                >
                  {/* Mobile: icon only */}
                  <span className="sm:hidden">{item.icon}</span>
                  {/* Desktop: label */}
                  <span className="hidden sm:inline text-xs md:text-sm uppercase">
                    {item.label}
                  </span>
                  {/* Hover underline */}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-[2px] 
                    bg-purple-600 transition-all duration-300 group-hover:w-full"
                  ></span>
                </ScrollLink>
              </motion.div>
            ))}
          </div>

          <Separator orientation="vertical" className="h-6 hidden sm:block" />

          {/* CTA Buttons */}
          <motion.div
            className="hidden sm:flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Email Us */}
            <Button
              className="cursor-pointer border border-purple-600 bg-white text-black 
                         hover:bg-purple-600 hover:text-white text-sm font-bold 
                         px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => (window.location.href = "mailto:contact@leagun.com")}
            >
              Email Us
            </Button>

            {/* Book a Call */}
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-6 py-2 text-sm font-semibold 
                         rounded-md shadow-md bg-purple-800 text-white 
                         hover:bg-white hover:text-black hover:shadow-lg 
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Book a Call</span>
            </motion.a>
          </motion.div>
        </Dock>
      </TooltipProvider>
    </motion.div>
  );
}
