import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8 bg-white rounded-lg shadow-xl max-w-md">
        <div className="flex justify-center">
          <ApperIcon name="AlertCircle" size={64} className="text-primary" />
        </div>
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          <ApperIcon name="Home" size={20} />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}