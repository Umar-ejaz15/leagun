import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mailchimpURL = "https://YOUR_MAILCHIMP_URL_HERE"; // replace this

  return (
    <section className="relative bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 backdrop-blur-lg py-16 px-6 sm:px-12 lg:px-24 text-center rounded-2xl shadow-lg transition-shadow overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-extrabold
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-purple-500 via-purple-700 to-purple-400
                     drop-shadow-lg mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
        Get the latest updates, tips, and offers delivered straight to your inbox.
      </p>

      {!submitted ? (
        <form
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
            className="w-full sm:w-auto px-4 py-3 text-gray-900 bg-white placeholder-gray-400 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition shadow-sm hover:shadow-md"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 hover:shadow-lg transition shadow-md"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 font-bold text-lg mt-4 animate-fade-in">
          ✅ Thank you for subscribing!
        </p>
      )}

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Newsletter;
