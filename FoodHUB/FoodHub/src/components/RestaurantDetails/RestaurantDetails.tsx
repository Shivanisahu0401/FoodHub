import React from 'react';
import { Star, Clock, DollarSign, Plus } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface RestaurantDetailsProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  menu: MenuItem[];
}

export default function RestaurantDetails({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  priceRange,
  menu,
}: RestaurantDetailsProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-4">{cuisine}</p>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-green-100 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-green-600 fill-current" />
            <span className="ml-1 text-sm text-green-600">{rating}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600">{deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600">{priceRange}</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menu.map((item) => (
            <div key={item.id} className="flex space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="mt-1 font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price, restaurantId: id })}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}