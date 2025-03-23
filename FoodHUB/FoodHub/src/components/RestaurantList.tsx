import React from 'react';
import RestaurantCard from './RestaurantCard';

const restaurants = [
  {
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80",
    cuisine: "Italian, Pizza",
    rating: 4.5,
    deliveryTime: "30-40 min",
    priceRange: "$$"
  },
  {
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    cuisine: "American, Burgers",
    rating: 4.3,
    deliveryTime: "25-35 min",
    priceRange: "$"
  },
  {
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80",
    cuisine: "Japanese, Sushi",
    rating: 4.7,
    deliveryTime: "40-50 min",
    priceRange: "$$$"
  },
  {
    name: "Healthy Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    cuisine: "Healthy, Salads",
    rating: 4.4,
    deliveryTime: "20-30 min",
    priceRange: "$$"
  }
];

export default function RestaurantList() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}