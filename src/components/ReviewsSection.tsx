"use client";

import React from 'react';
import { Star } from 'lucide-react';

const mockReviews = [
  {
    id: 1,
    customerName: "Sarah J.",
    rating: 5,
    comment: "Stoke HVAC provided excellent service! The technician was prompt, professional, and fixed our AC quickly. Highly recommend!",
    date: "2023-10-26",
  },
  {
    id: 2,
    customerName: "Michael P.",
    rating: 4,
    comment: "Good service overall. They were able to schedule a plumbing repair on short notice. The pricing was fair.",
    date: "2023-10-20",
  },
  {
    id: 3,
    customerName: "Emily R.",
    rating: 5,
    comment: "Fantastic experience with their electrical team. They upgraded our panel efficiently and explained everything clearly. Very satisfied!",
    date: "2023-10-15",
  },
  {
    id: 4,
    customerName: "David L.",
    rating: 5,
    comment: "Our furnace broke down in winter, and Stoke HVAC came to the rescue. Fast, friendly, and effective service. Lifesavers!",
    date: "2023-09-28",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 flex-grow">"{review.comment}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{review.customerName}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-md">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;