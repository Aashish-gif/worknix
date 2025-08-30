// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token"); // Get token from localStorage

//   // If no token exists, redirect to login page
//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   return children; // Allow access if token exists
// };

// export default ProtectedRoute;
// ProtectedRoute.jsx
// ProtectedRoute.jsx
// ProtectedRoute.jsx
// ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  // If token doesn't exist, redirect to home page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // If token exists, render the nested route
  return <Outlet />;
};

export default ProtectedRoute;

