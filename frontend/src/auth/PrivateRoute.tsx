/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

interface PrivateRouteProps {
    element: React.ReactElement;
}



const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const checkAuth = async () => {
            try {
               const response = await axios.get('/api/auth/protected', { withCredentials: true } );
                setIsAuthenticated(true);
                console.log(response.data.role);
            } catch {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? element : <Navigate to="/login"  />;
};

export default PrivateRoute;
