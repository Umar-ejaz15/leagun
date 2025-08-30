"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import Buttonrgb from "./Buttonrgb";
import { Link as ScrollLink } from "react-scroll";
import { HomeIcon, InfoIcon, UserCheckIcon, PhoneIcon } from "lucide-react"; // icons for mobile

const DATA = [
  { href: "home", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
  { href: "about", label: "About", icon: <InfoIcon className="w-5 h-5" /> },
  {
    href: "whyus",
    label: "Why Us",
    icon: <UserCheckIcon className="w-5 h-5" />,
  },
  {
    href: "contact",
    label: "Contact",
    icon: <PhoneIcon className="w-5 h-5" />,
  },
];

export default function Navigation() {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[100]  px-4">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="gap-5 px-4 py-2 bg-white/90 w-[100vw] md:w-[800px] backdrop-blur-md rounded-xl shadow-lg  transition-all duration-300 flex justify-between items-center"
        >
          {/* Logo */}
          <h1 className="flex-shrink-0">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-auto" />
          </h1>

          <Separator orientation="vertical" className="h-6 hidden sm:block" />

          {/* Navigation Buttons */}
          <div className="flex items-center gap-10 md:gap-3">
            {DATA.map((item) => (
              <ScrollLink
                key={item.href}
                to={item.href}
                smooth={true}
                offset={-80}
                duration={800}
                className="group cursor-pointer text-gray-800 font-bold relative hover:text-purple-600 transition-colors duration-300 flex items-center gap-1"
              >
                {/* Mobile: icon only, Desktop: icon + label */}
                <span className="sm:hidden">{item.icon}</span>
                <span className="hidden sm:inline text-xs md:text-sm uppercase">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            ))}
          </div>

          <Separator orientation="vertical" className="h-6 hidden sm:block" />

          {/* CTA Buttons */}
          <div className=" hidden sm:flex items-center gap-1">
            <div className="hidden sm:block">
              <Buttonrgb txt="Email Us" />
            </div>
            <InteractiveHoverButton className="bg-purple-600 hidden sm:block text-white hover:bg-purple-700 transition-all duration-300 rounded-md text-xs px-6 py-2">
              Book A Call
            </InteractiveHoverButton>
          </div>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
