// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Watch, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useSelector((state) => state.cart);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Watch className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">LuxWatch</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
              <Link to="/watches" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Watches</Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-700">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/watches" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Watches
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart {totalItems > 0 && <span className="ml-1 bg-red-600 px-2 py-0.5 rounded-full text-xs">{totalItems}</span>}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;