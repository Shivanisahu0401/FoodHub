import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import RestaurantList from './components/RestaurantList';
import LoginModal from './components/Auth/LoginModal';
import CartModal from './components/Cart/CartModal';
import { useAuthStore } from './store/authStore';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from './store/cartStore';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const cartItems = useCartStore((state) => state.items);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Cart Button */}
      <button
        onClick={() => setShowCartModal(true)}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors"
      >
        <ShoppingBag className="h-6 w-6" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {cartItems.length}
          </span>
        )}
      </button>

      <Hero />
      <Categories />
      <RestaurantList />

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showCartModal && <CartModal onClose={() => setShowCartModal(false)} />}
    </div>
  );
}

export default App;