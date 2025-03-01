// HomePage.js
import { Link } from 'react-router-dom';
import { useGetWatchesQuery } from '../redux/api/watchesApi';
import Hero from '../components/Hero';
import WatchCard from '../components/WatchCard';
import { Clock, Award, Truck, CreditCard } from 'lucide-react';

const HomePage = () => {
  const { data: watches, isLoading, error } = useGetWatchesQuery();

  const featuredWatches = watches?.slice(0, 4) || [];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose LuxWatch</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We offer the finest selection of timepieces with exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-600">All our watches are 100% authentic with manufacturer warranty</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">Curated selection of the finest timepieces from top brands</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Enjoy free worldwide shipping on all orders over $500</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Multiple secure payment options for your convenience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Watches Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Watches</h2>
              <p className="mt-2 text-lg text-gray-600">
                Our most popular timepieces
              </p>
            </div>
            <Link to="/watches" className="text-yellow-600 hover:text-yellow-700 font-medium">
              View All →
            </Link>
          </div>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading watches...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Failed to load watches. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredWatches.map((watch) => (
                <WatchCard key={watch._id} watch={watch} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
              <p className="mt-4 text-lg text-gray-300">
                Stay updated with our latest collections, exclusive offers, and watch care tips.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <form className="sm:flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-5 py-3 bg-yellow-500 text-gray-900 font-medium rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;