import React from "react";

const Map = () => {
  return (
    <div className="relative w-full min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 py-16">
      {/* Heading + Text */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-4">
          Visit Our Office
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          We’d love to meet you in person! Our doors are always open for
          conversations, brainstorming, and collaboration.
        </p>
        <p className="text-lg font-semibold text-gray-800">
          📍 Office Address: The New York Times Building, 620 8th Ave, New York, NY 10018
        </p>
      </div>

      {/* Map Section */}
      <section className="w-full h-[500px] relative rounded-xl shadow-xl overflow-hidden">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.974484998173!2d-73.99108438459222!3d40.75609374236651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ac28c8e2b5%3A0xc9cf7c2c1e85fdfc!2sThe%20New%20York%20Times%20Building!5e0!3m2!1sen!2sus!4v1694440441000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>
    </div>
  );
};

export default Map;
