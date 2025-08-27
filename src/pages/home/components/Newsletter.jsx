import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Mailchimp form action URL (replace with your own)
  const mailchimpURL = "https://YOUR_MAILCHIMP_URL_HERE";

  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16 px-6 sm:px-12 lg:px-24 text-center rounded-xl relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-white/80 mb-8">
        Get the latest updates, tips, and offers delivered to your inbox.
      </p>

      {!submitted ? (
        <form
          action={mailchimpURL}
          method="POST"
          target="_blank"
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            name="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 text-white rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-white/90 transition"
            onClick={() => setSubmitted(true)}
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className="text-white font-semibold text-lg">
          ✅ Thank you for subscribing!
        </p>
      )}
    </section>
  );
};

export default Newsletter;
