// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-10 text-gray-500">Checking authentication...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.status === 'pending') {
    return (
      <div className="text-center mt-10 text-yellow-600">
        Your account is pending approval by admin.
      </div>
    );
  }

  if (user.status === 'rejected') {
    return (
      <div className="text-center mt-10 text-red-600">
        Your account has been rejected. Please contact support.
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
