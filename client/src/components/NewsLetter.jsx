import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full px-6 md:px-20 my-16">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Subscribe to our Newsletter
        </h1>
        <p className="text-gray-500 mt-3">
          Stay updated with our latest products and special offers. Join our
          email list today.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-xl px-4 py-3 w-full sm:w-72 focus:outline-none focus:border-gray-600"
        />
        <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
