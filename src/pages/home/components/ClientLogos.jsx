import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", alt: "Nike" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", alt: "Netflix" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
];

const ClientLogos = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-16">
          Trusted by Leading Brands
        </h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-purple-200 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
