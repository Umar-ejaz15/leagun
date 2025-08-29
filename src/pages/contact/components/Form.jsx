import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Form = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-6 sm:px-12 lg:px-32 py-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Content */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Build Something <span className="text-purple-600">Amazing</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Got an idea, a project, or just a question? We’d love to hear from you. 
            Drop us a message and our team will get back to you faster than you can say 
            <span className="font-semibold text-purple-600"> “growth unlocked.”</span>
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 <span className="font-semibold">Our Office:</span> 123 Growth Street, Innovation City
            </p>
            <p>
              📧 <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:hello@leagun.com" className="text-purple-600 hover:underline">
                hello@leagun.com
              </a>
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> +1 (234) 567-890
            </p>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          className="bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          ></textarea>

          <Button className="bg-purple-600 text-white py-5 px-10 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300">
            Send Message →
          </Button>
        </motion.form>
      </div>

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 blur-3xl rounded-full opacity-30 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 blur-3xl rounded-full opacity-20 -z-10"></div>
    </section>
  );
};

export default Form;
