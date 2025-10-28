import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <ApperIcon name="AlertCircle" size={48} className="text-primary" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <ApperIcon name="Home" size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;