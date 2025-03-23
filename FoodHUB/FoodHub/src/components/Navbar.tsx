import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">FoodHub</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for restaurants or dishes"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center text-gray-700 hover:text-red-500">
              <User className="h-6 w-6" />
              <span className="ml-1">Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}