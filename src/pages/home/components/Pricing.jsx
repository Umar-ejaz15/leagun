import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const plans = {
  monthly: [
    {
      name: "Basic",
      price: "49",
      features: [
        "Google Business Profile Setup",
        "Basic SEO Optimization",
        "Monthly Report",
      ],
    },
    {
      name: "Pro",
      price: "99",
      features: [
        "Everything in Basic",
        "Local SEO Strategy",
        "Content Creation (2 posts)",
        "Backlink Building",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "199",
      features: [
        "Everything in Pro",
        "Advanced SEO & Automation",
        "Dedicated Account Manager",
        "Priority Support",
      ],
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "490",
      features: [
        "Google Business Profile Setup",
        "Basic SEO Optimization",
        "Monthly Report",
      ],
    },
    {
      name: "Pro",
      price: "990",
      features: [
        "Everything in Basic",
        "Local SEO Strategy",
        "Content Creation (2 posts)",
        "Backlink Building",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "1990",
      features: [
        "Everything in Pro",
        "Advanced SEO & Automation",
        "Dedicated Account Manager",
        "Priority Support",
      ],
    },
  ],
};

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 mb-8">
          Choose a plan that fits your business needs.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className={`text-sm font-medium mr-3 ${billing === "monthly" ? "text-purple-600" : "text-gray-500"}`}>Monthly</span>
          <div
            className="relative w-14 h-7 bg-purple-100 rounded-full cursor-pointer flex items-center px-1"
            onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
          >
            <motion.div
              className="w-6 h-6 bg-purple-600 rounded-full"
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ x: billing === "yearly" ? 28 : 0 }}
            />
          </div>
          <span className={`text-sm font-medium ml-3 ${billing === "yearly" ? "text-purple-600" : "text-gray-500"}`}>Yearly</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans[billing].map((plan, i) => (
            <motion.div
              key={i}
              className={`relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl transition-all ${
                plan.popular ? "border-purple-400 shadow-xl scale-105" : ""
              }`}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">
                ${plan.price}
                <span className="text-base font-medium text-gray-500">/{billing === "monthly" ? "mo" : "yr"}</span>
              </p>
              <ul className="space-y-3 mb-6 text-gray-600 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
