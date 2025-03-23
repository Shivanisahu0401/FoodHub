import React from 'react';
import { Pizza, Coffee, Sandwich, IceCream, Beef, Salad } from 'lucide-react';

const categories = [
  { name: 'Pizza', icon: Pizza },
  { name: 'Coffee', icon: Coffee },
  { name: 'Burgers', icon: Sandwich },
  { name: 'Desserts', icon: IceCream },
  { name: 'Steaks', icon: Beef },
  { name: 'Healthy', icon: Salad },
];

export default function Categories() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <category.icon className="h-8 w-8 text-red-500 mb-2" />
              <span className="text-gray-700">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}