import React from "react";
import { Star } from "lucide-react";
import { Highlighter } from "@/components/magicui/highlighter";

const reviews = [
  {
    name: "John Doe",
    role: "Plumber",
    text: "This AI lead generation system skyrocketed my business! High-quality local leads every week.",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    role: "Electrician",
    text: "The combination of AI + human expertise is genius. My client calls increased 3x!",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "HVAC Contractor",
    text: "Finally, a service that actually understands our industry. Highly recommended!",
    rating: 4,
  },
  {
    name: "Emma Wilson",
    role: "Roofer",
    text: "Simple, clear, and extremely effective. Leads are now consistent and targeted.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Electrician",
    text: "My business has grown in just a few months. Loved the dashboard and AI insights.",
    rating: 5,
  },
  {
    name: "Liam Brown",
    role: "Plumber",
    text: "Great insights! The AI dashboard gives us an edge over competitors. Highly flexible and easy to use.",
    rating: 4,
  },
  {
    name: "Olivia Davis",
    role: "HVAC Contractor",
    text: "I’ve tried multiple systems, but this one delivers real leads consistently. Love the AI + human touch.",
    rating: 5,
  },
  {
    name: "Sophia Miller",
    role: "Roofer",
    text: "Very satisfied with the service. Our calls doubled in just 2 months. Absolutely recommend!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          What Our {" "}
           <Highlighter action="underline" color="#FF9800">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          Clients 
                      </span>
                    </Highlighter>
          Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Real feedback from service businesses using our AI + human-powered lead generation system.
        </p>
      </div>

      {/* Double marquee */}
      <div className="space-y-6 overflow-hidden relative">
        {/* Marquee 1: left */}
        <div className="flex animate-marquee-left gap-6">
          {reviews.concat(reviews).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Marquee 2: right */}
        <div className="flex animate-marquee-right gap-6 mt-4">
          {reviews.concat(reviews).map((review, index) => (
            <ReviewCard key={index + 100} review={review} />
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-left {
            display: flex;
            width: max-content;
            animation: marquee-left 30s linear infinite;
          }
          .animate-marquee-right {
            display: flex;
            width: max-content;
            animation: marquee-right 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

const ReviewCard = ({ review }) => (
  <div className="flex-none bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 w-80">
    <div className="flex items-center mb-3">
      <div className="flex gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    </div>
    <p className="text-gray-700 mb-4">{review.text}</p>
    <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
    <span className="text-sm text-gray-500">{review.role}</span>
  </div>
);

export default Reviews;
