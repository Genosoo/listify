// context/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface AuthContextProps {
  isAuthenticated: boolean;
  role: string | null;
  checkAuth: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  role: null,
  checkAuth: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<string | null>(null);

  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/auth/protected', { withCredentials: true });
      setIsAuthenticated(true);
      setRole(response.data.role); // Assume the role is sent back from the protected route
    } catch {
      setIsAuthenticated(false);
      setRole(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
