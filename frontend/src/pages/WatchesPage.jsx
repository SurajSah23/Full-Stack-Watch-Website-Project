// WatchesPage.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetWatchesQuery, useGetWatchesByCategoryQuery } from '../redux/api/watchesApi';
import { setSelectedCategory } from '../redux/slices/watchesSlice';
import WatchCard from '../components/WatchCard';
import CategoryFilter from '../components/CategoryFilter';
import { Search } from 'lucide-react';

const WatchesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedCategory = useSelector((state) => state.watches.selectedCategory);
  
  // Parse category from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      dispatch(setSelectedCategory(categoryParam));
    }
  }, [location.search, dispatch]);

  // Fetch watches based on selected category
  const { 
    data: allWatches, 
    isLoading: isLoadingAll, 
    error: errorAll 
  } = useGetWatchesQuery();
  
  const { 
    data: categoryWatches, 
    isLoading: isLoadingCategory, 
    error: errorCategory 
  } = useGetWatchesByCategoryQuery(selectedCategory || '', { 
    skip: !selectedCategory 
  });

  const watches = selectedCategory ? categoryWatches : allWatches;
  const isLoading = selectedCategory ? isLoadingCategory : isLoadingAll;
  const error = selectedCategory ? errorCategory : errorAll;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Watch Collection</h1>
        <p className="text-lg text-gray-600">
          Discover our curated selection of premium timepieces for every style and occasion.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <CategoryFilter />
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Search</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search watches..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Price Range</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="price-1" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="price-1" className="ml-2 text-gray-700">Under $500</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-2" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="price-2" className="ml-2 text-gray-700">$500 - $1,000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-3" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="price-3" className="ml-2 text-gray-700">$1,000 - $5,000</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-4" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="price-4" className="ml-2 text-gray-700">$5,000+</label>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-4">Brands</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="brand-1" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="brand-1" className="ml-2 text-gray-700">Rolex</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="brand-2" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="brand-2" className="ml-2 text-gray-700">Omega</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="brand-3" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="brand-3" className="ml-2 text-gray-700">Tag Heuer</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="brand-4" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="brand-4" className="ml-2 text-gray-700">Seiko</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="brand-5" className="h-4 w-4 text-yellow-500 focus:ring-yellow-400" />
                  <label htmlFor="brand-5" className="ml-2 text-gray-700">Casio</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-3/4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading watches...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Failed to load watches. Please try again later.</p>
            </div>
          ) : watches && watches.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">{watches.length} watches found</p>
                <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {watches.map((watch) => (
                  <WatchCard key={watch._id} watch={watch} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-xl text-gray-600">No watches found in this category.</p>
              <p className="mt-2 text-gray-500">Try selecting a different category or check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchesPage;