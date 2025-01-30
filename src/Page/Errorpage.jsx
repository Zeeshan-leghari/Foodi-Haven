import { Link } from 'react-router-dom';
import { FiFrown, FiHome } from 'react-icons/fi';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Sad Face Icon */}
        <div className="mb-8 flex justify-center">
          <FiFrown className="w-24 h-24 text-red-500 animate-bounce" />
        </div>

        {/* Error Code - Hardcoded 404 */}
        <h1 className="text-6xl md:text-9xl font-bold text-red-500 mb-4">
          404
        </h1>

        {/* Error Message - Hardcoded */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>

        {/* Static Description */}
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you re looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        {/* Return Home Button */}
        <Link
          to="/"
          className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          <FiHome className="mr-2" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;