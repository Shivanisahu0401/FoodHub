import React from 'react';
import { Star } from 'lucide-react';

interface RestaurantProps {
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
}

export default function RestaurantCard({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  priceRange,
}: RestaurantProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-1">{cuisine}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div className="flex items-center bg-green-100 px-2 py-1 rounded">
              <Star className="h-4 w-4 text-green-600 fill-current" />
              <span className="ml-1 text-sm text-green-600">{rating}</span>
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-600">{deliveryTime}</span>
          </div>
          <span className="text-gray-600">{priceRange}</span>
        </div>
      </div>
    </div>
  );
}