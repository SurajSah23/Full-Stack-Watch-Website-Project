import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../redux/slices/watchesSlice';

const categories = [
  { id: 'all', name: 'All Watches' },
  { id: 'luxury', name: 'Luxury' },
  { id: 'sports', name: 'Sports' },
  { id: 'casual', name: 'Casual' },
  { id: 'smart', name: 'Smart' },
];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.watches.selectedCategory);

  const handleCategoryChange = (categoryId) => {
    dispatch(setSelectedCategory(categoryId === 'all' ? null : categoryId));
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              (category.id === 'all' && selectedCategory === null) || category.id === selectedCategory
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;