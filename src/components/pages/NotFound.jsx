import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full text-center px-6">
        <div className="mb-8">
          <ApperIcon name="AlertCircle" size={64} className="mx-auto text-primary mb-4" />
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button className="w-full">
              <ApperIcon name="Home" size={20} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/contacts">
            <Button variant="outline" className="w-full">
              <ApperIcon name="Users" size={20} className="mr-2" />
              View Contacts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;