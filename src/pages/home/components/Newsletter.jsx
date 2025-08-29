import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mailchimpURL = "https://YOUR_MAILCHIMP_URL_HERE"; // replace this

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 px-6 sm:px-12 lg:px-24 text-center  shadow-xl overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.2),transparent_60%)] blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400 drop-shadow-lg mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          Get the latest updates, tips, and offers delivered straight to your inbox.
        </p>

        <AnimatePresence>
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              action={mailchimpURL}
              method="POST"
              target="_blank"
              className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
              onSubmit={() => setSubmitted(true)}
            >
              <input
                type="email"
                name="EMAIL"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-900 bg-white/70 backdrop-blur-md placeholder-gray-400 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-600 shadow-md hover:shadow-xl transition"
              >
                Subscribe
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 font-bold text-lg mt-6"
            >
              ✅ Thank you for subscribing!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Text */}
        <p className="text-gray-500 text-sm mt-4">
          No spam, unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
};

export default Newsletter;
