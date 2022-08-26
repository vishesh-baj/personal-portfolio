import React from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "../paths/paths";
export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access-token");

  if (!token) {
    return <Navigate to={PATHS.home} replace />;
  }
  return children;
};

export const LoginRedirectionRoute = ({ children }) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    return <Navigate to={PATHS.dashboard} replace />;
  }
  return children;
};
