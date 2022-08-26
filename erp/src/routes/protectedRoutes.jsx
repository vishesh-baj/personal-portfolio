import React from "react";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access-token");

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const LoginRedirectionRoute = ({ children }) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return children;
};
