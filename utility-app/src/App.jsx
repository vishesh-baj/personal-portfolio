import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import NotesPage from "./pages/NotesPage";
import ColorPalette from "./pages/ColorPallettePage";
import ErrorPage from "./pages/ErrorPage";
import { LoginContextProvider } from "./context/LoginContext";
import { TodoContextProvider } from "./context/TodoContext";
import { ColorPaletteProvider } from "./context/ColorPaletteContext";
import PrivateRoute from "./routes/PrivateRoute";
import LoginRedirectionRoute from "./routes/LoginRedirectionRoute";
import { NotesContextProvider } from "./context/NotesContext";
import { PATHS } from "./paths/paths";

const App = () => {
  return (
    <div data-theme="cyberpunk">
      <BrowserRouter>
        <LoginContextProvider>
          <TodoContextProvider>
            <NotesContextProvider>
              <ColorPaletteProvider>
                <Routes>
                  <Route
                    path={PATHS.login}
                    element={
                      <LoginRedirectionRoute>
                        <LoginPage />
                      </LoginRedirectionRoute>
                    }
                  />
                  <Route
                    path={PATHS.todo}
                    element={
                      <PrivateRoute>
                        <TodoPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={PATHS.notes}
                    element={
                      <PrivateRoute>
                        <NotesPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path={PATHS.colorPalette}
                    element={
                      <PrivateRoute>
                        <ColorPalette />
                      </PrivateRoute>
                    }
                  />
                  <Route path={"*"} element={<ErrorPage />} />
                </Routes>
              </ColorPaletteProvider>
            </NotesContextProvider>
          </TodoContextProvider>
        </LoginContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
