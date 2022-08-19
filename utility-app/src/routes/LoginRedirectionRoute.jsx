import { Navigate } from "react-router-dom";

const LoginRedirectionRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return !token ? children : <Navigate to="/todo" />;
};

export default LoginRedirectionRoute;
