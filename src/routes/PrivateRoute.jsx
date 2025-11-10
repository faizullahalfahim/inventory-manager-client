import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-infinity loading-xl"></span>;
    }
   
       if (!user) {
        return <Navigate to="/access-required" state={location.pathname}  />;

       }
         return children;
    
};

export default PrivateRoute;