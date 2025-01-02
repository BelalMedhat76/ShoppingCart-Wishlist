import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Package, Heart, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import Footer from './Footer';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const { cart } = useStore();
  const {wishlist} =useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Package className="w-8 h-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-900">ShopHub</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="nav-link">
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link to="/products" className="nav-link">
                <Package className="w-5 h-5" />
                <span>Products</span>
              </Link>
              <Link to="/wishlist" className="nav-link relative">
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2  bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="nav-link relative">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-2 space-y-1">
                <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>
                <Link to="/products" className="mobile-nav-link" onClick={toggleMenu}>
                  <Package className="w-5 h-5" />
                  <span>Products</span>
                </Link>
                <Link to="/wishlist" className="mobile-nav-link" onClick={toggleMenu}>
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </Link>
                <Link to="/cart" className="mobile-nav-link relative" onClick={toggleMenu}>
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                  {cart.length > 0 && (
                    <span className="absolute top-0 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}