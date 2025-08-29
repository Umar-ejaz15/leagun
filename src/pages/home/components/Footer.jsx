import React, { useState, useEffect } from "react";
import { Linkedin, Twitter, Github, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Buttonrgb from "@/components/Buttonrgb";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 w-full border-t border-purple-100 relative">
      {/* ✅ Gradient Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200" />

      {/* ✅ Footer Main Section */}
      <footer className="py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ✅ Logo & Copy */}
          <div>
            <img src="logo.jpg" alt="Logo" className="h-10 mb-3" />
            <p className="text-gray-600 text-sm mb-4">
              Scaling businesses with smart automation and AI-driven solutions.
            </p>
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>

          {/* ✅ Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              {["home", "whyus", "about", "contact"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/${item}`}
                    className="hover:text-purple-600 relative inline-block after:block after:h-[2px] after:bg-purple-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

       

          {/* ✅ Social */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">
              Connect with us
            </h4>
            <div className="flex gap-4 text-gray-600">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: "#9333ea" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Footer;
