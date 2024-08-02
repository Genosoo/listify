// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import PrivateRoute from './auth/PrivateRoute';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path='/*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
  );
};


export default App;
