import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); 
    const location = useLocation();
    
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin border-t-transparent"></div>
                    <p className="mt-4 text-lg font-semibold text-gray-400">
                        Authenticating User...
                    </p>
                </div>
            </div>
        );
    }
   
    if (!user) {
        return <Navigate to="/access-required" state={{ from: location.pathname }} />;
    }
    
    return children;
};

export default PrivateRoute;