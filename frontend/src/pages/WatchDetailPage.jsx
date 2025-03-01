import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetWatchByIdQuery } from '../redux/api/watchesApi';
import { addToCart } from '../redux/slices/cartSlice';
import { ShoppingCart, Heart, Share2, ArrowLeft, Check, Star } from 'lucide-react';

const WatchDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { data: watch, isLoading, error } = useGetWatchByIdQuery(id || '');

  const handleAddToCart = () => {
    if (watch) {
      dispatch(addToCart(watch));
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-500 border-r-transparent"></div>
        <p className="mt-4 text-gray-600">Loading watch details...</p>
      </div>
    );
  }

  if (error || !watch) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-red-500 text-xl">Watch not found or an error occurred.</p>
        <button 
          onClick={() => navigate('/watches')}
          className="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to watches
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-96 md:h-full">
              <img 
                src={watch.imageUrl} 
                alt={watch.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="mb-2">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {watch.category.toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{watch.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{watch.brand}</p>
            
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(24 reviews)</span>
            </div>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">${watch.price.toLocaleString()}</span>
              {watch.inStock ? (
                <span className="ml-4 inline-flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-1" />
                  In Stock
                </span>
              ) : (
                <span className="ml-4 text-red-600">Out of Stock</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">{watch.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {watch.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 flex items-center justify-center"
                disabled={!watch.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              
              <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-50 flex items-center justify-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Specifications</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Brand</span>
              <span className="font-medium">{watch.brand}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Model</span>
              <span className="font-medium">{watch.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category</span>
              <span className="font-medium capitalize">{watch.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Movement</span>
              <span className="font-medium">Automatic</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Case Material</span>
              <span className="font-medium">Stainless Steel</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Water Resistance</span>
              <span className="font-medium">100m</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
          <p className="text-gray-700 mb-4">
            Free shipping on all orders over $500. Standard delivery takes 3-5 business days.
          </p>
          <p className="text-gray-700">
            Express shipping available for an additional fee. International shipping available to select countries.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Returns & Warranty</h3>
          <p className="text-gray-700 mb-4">
            30-day money-back guarantee for unworn watches in original packaging.
          </p>
          <p className="text-gray-700">
            All watches come with a 2-year international warranty covering manufacturing defects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchDetailPage;