// Hero.js
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury watch background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <div className="flex items-center mb-6">
            <Clock className="h-8 w-8 text-yellow-400 mr-2" />
            <span className="text-lg font-medium text-yellow-400">Premium Collection</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Timeless Elegance for Every Moment
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:w-4/5">
            Discover our exquisite collection of premium timepieces crafted with precision and designed for those who appreciate the art of watchmaking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/watches"
              className="inline-block bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors text-center"
            >
              Explore Collection
            </Link>
            <Link
              to="/about"
              className="inline-block bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;