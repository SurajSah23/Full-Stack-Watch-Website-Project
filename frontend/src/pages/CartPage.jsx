import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/slices/cartSlice';
import { Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any watches to your cart yet.</p>
          <Link 
            to="/watches" 
            className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </h2>
                <button 
                  onClick={handleClearCart}
                  className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear Cart
                </button>
              </div>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item._id} className="p-6 flex flex-col sm:flex-row">
                  <div className="sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden rounded-md mb-4 sm:mb-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="sm:ml-6 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link to={`/watches/${item._id}`} className="hover:text-yellow-600">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                        <p className="mt-1 text-sm text-gray-500 capitalize">{item.category}</p>
                      </div>
                      <p className="text-lg font-medium text-gray-900">${item.price.toLocaleString()}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => handleRemoveItem(item._id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="p-6 border-t border-gray-200">
              <Link 
                to="/watches" 
                className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 lg:mt-0 lg:col-span-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900 font-medium">${totalAmount.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900 font-medium">
                  {totalAmount >= 500 ? 'Free' : '$10.00'}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900 font-medium">${(totalAmount * 0.07).toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-lg font-semibold text-gray-900">
                  ${(totalAmount + (totalAmount >= 500 ? 0 : 10) + (totalAmount * 0.07)).toFixed(2)}
                </span>
              </div>
            </div>
            
            <button className="mt-6 w-full bg-yellow-500 text-gray-900 font-medium py-3 px-4 rounded-md hover:bg-yellow-400 flex items-center justify-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Proceed to Checkout
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Secure checkout powered by Stripe</p>
            </div>
          </div>
          
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Accepted Payment Methods</h3>
            <div className="flex justify-between">
              <div className="w-12 h-8 bg-gray-200 rounded"></div>
              <div className="w-12 h-8 bg-gray-200 rounded"></div>
              <div className="w-12 h-8 bg-gray-200 rounded"></div>
              <div className="w-12 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;