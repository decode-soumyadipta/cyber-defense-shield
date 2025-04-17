
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-shield-darkest">
      <div className="text-center max-w-lg p-6 bg-shield-dark border border-shield-gray rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="bg-shield-gray/20 p-4 rounded-full">
            <Shield className="w-16 h-16 text-shield-red" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-shield-red flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 mr-2" />
          404
        </h1>
        
        <p className="text-xl text-shield-light-gray mb-6">Security breach detected. Access denied to requested resource.</p>
        
        <p className="text-shield-light-gray/70 mb-8">
          The path <code className="px-2 py-1 bg-shield-darker rounded text-shield-cyan">{location.pathname}</code> does not exist. 
          This incident has been logged for security analysis.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 rounded-md bg-shield-blue hover:bg-shield-blue/80 text-white transition-colors"
        >
          <Shield className="w-5 h-5 mr-2" />
          Return to Secure Area
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
