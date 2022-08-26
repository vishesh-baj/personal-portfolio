import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import {
  LoginRedirectionRoute,
  ProtectedRoute,
} from "./routes/protectedRoutes";
const App = () => {
  return (
    <div data-theme="wireframe">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <LoginRedirectionRoute>
                <Home />
              </LoginRedirectionRoute>
            }
            path="/"
          />
          <Route
            element={
              <LoginRedirectionRoute>
                <Login />
              </LoginRedirectionRoute>
            }
            path="/login"
          />
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            path="/dashboard"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
