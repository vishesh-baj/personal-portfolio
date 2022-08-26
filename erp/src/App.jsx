import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Students from "./pages/Students";
import { PATHS } from "./paths/paths";
import {
  LoginRedirectionRoute,
  ProtectedRoute,
} from "./routes/protectedRoutes";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <LoginRedirectionRoute>
                <Home />
              </LoginRedirectionRoute>
            }
            path={PATHS.home}
          />
          <Route
            element={
              <LoginRedirectionRoute>
                <Login />
              </LoginRedirectionRoute>
            }
            path={PATHS.login}
          />
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            path={PATHS.dashboard}
          />
          <Route
            element={
              <ProtectedRoute>
                <Students />
              </ProtectedRoute>
            }
            path={PATHS.students}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
