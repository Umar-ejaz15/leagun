"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formsubmit.co/workwithzain@yahoo.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        alert("✅ Your application was submitted successfully!");
        form.reset();
      })
      .catch(() => {
        alert("❌ Something went wrong, please try again.");
      });
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-6 sm:px-12 lg:px-32 py-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* -------- Left Content -------- */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Sign Up to Build Your{" "}
            <span className="text-purple-600">Sales Growth Engine</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fill in the form and we’ll connect with you to craft a growth
            strategy that brings in leads, sales, and ROI 🚀
          </p>
        </motion.div>

        {/* -------- Right Form -------- */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Hidden fields for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Application Received!" />

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="text"
            name="business_name"
            placeholder="Business Name"
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="text"
            name="niche"
            placeholder="Your Niche / Industry"
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <select
            name="expected_leads"
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            <option value="">How many leads do you expect monthly?</option>
            <option value="10-20">10–20</option>
            <option value="20-50">20–50</option>
            <option value="50-100">50–100</option>
            <option value="100+">100+</option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          <Button
            type="submit"
            className="bg-purple-600 text-white py-5 px-10 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300"
          >
            Submit Application →
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Form;
