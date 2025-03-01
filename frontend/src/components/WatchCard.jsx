// WatchCard.js
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { ShoppingCart } from 'lucide-react';
import PropTypes from 'prop-types';

const WatchCard = ({ watch }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(watch));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/watches/${watch._id}`}>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={watch.imageUrl} 
            alt={watch.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
            {watch.category.toUpperCase()}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{watch.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{watch.brand}</p>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-gray-900">${watch.price.toLocaleString()}</span>
            
            <button
              onClick={handleAddToCart}
              className="bg-gray-900 text-white p-2 rounded-full hover:bg-yellow-500 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Define prop types
WatchCard.propTypes = {
  watch: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default WatchCard;