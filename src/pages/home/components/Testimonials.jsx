import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const data = [
  {
    name: "John Carter",
    role: "Plumbing Business Owner",
    text: "Our rankings skyrocketed! The team helped us dominate local search. Highly recommend their services!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Sophie Turner",
    role: "HVAC Company Manager",
    text: "Finally, an SEO agency that understands local businesses. The results were beyond expectations.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Electrical Services Owner",
    text: "Transparent, effective, and results-driven. Our Google Business Profile is now #1 in our city!",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12">
          Don’t just take our word for it. Hear from real businesses like yours.
        </p>

        {/* Testimonials Carousel */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4">
          {data.map((review, i) => (
            <motion.div
              key={i}
              className="snap-center min-w-[320px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-purple-100 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h3>
              <p className="text-sm text-purple-600 mb-4">{review.role}</p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-center leading-relaxed text-sm">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
