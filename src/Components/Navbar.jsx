// Navbar.jsx
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart?.length || 0);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50"> {/* Increased z-index to 50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              Foodi Haven
            </span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search dishes..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-48 md:w-64 transition-all"
              />
            </div>

            {/* Cart Icon */}
            <Link 
              to="/cart"
              className="p-2 text-gray-600 hover:text-orange-600 relative transition-colors"
            >
              <FiShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center transform scale-100 hover:scale-110 transition-transform">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;