import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        try {
            await axios.post('/api/auth/logout'); // Send request to logout
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const response = await axios.get('/api/admin-check', { withCredentials: true });
                if (response.status === 200) {
                    setIsAdmin(true);
                }
            } catch (error) {
                console.error('Admin check failed:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAdmin();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            {isAdmin ? <p>You are an admin.</p> : <p>You are not an admin.</p>}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default DashboardPage;
