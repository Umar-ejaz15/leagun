import React from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Buttonrgb from "@/components/Buttonrgb";

const Footer = () => {
  return (
    <div className="bg-white w-full">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 px-6 md:px-12 text-center rounded-b-3xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          Ready to skyrocket your leads? 🚀
        </h2>
        <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto">
          Schedule a call and let our AI + human hybrid system supercharge your sales pipeline.  
          No fluff, real results.
        </p>
        <Buttonrgb txt="Schedule a Call →" />
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-12 px-6 md:px-12 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + Copy */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              className="h-10 w-auto"
            />
            <p className="text-gray-600 text-sm mt-2">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>


          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-gray-900"><Linkedin className="w-5 h-5"/></a>
            <a href="#" className="hover:text-gray-900"><Twitter className="w-5 h-5"/></a>
            <a href="#" className="hover:text-gray-900"><Github className="w-5 h-5"/></a>
            <a href="mailto:info@yourcompany.com" className="hover:text-gray-900"><Mail className="w-5 h-5"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
