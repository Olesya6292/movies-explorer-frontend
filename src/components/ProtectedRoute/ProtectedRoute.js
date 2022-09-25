import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {
  return loggedIn ? (
    children
  ) : localStorage.getItem('token') ? (
    children
  ) : (
    <Navigate to='/' />
  );
};

export default ProtectedRoute;
