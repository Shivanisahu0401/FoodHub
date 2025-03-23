import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[500px] mt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Food background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Hungry?</h1>
          <p className="text-2xl mb-8">Order food from your favorite restaurants</p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}