import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import NotesPage from "./pages/NotesPage";
import ColorPalette from "./pages/ColorPallettePage";
import { LoginContextProvider } from "./context/LoginContext";
import { TodoContextProvider } from "./context/TodoContext";
import { ColorPaletteProvider } from "./context/ColorPaletteContext";
import PrivateRoute from "./routes/PrivateRoute";
import LoginRedirectionRoute from "./routes/LoginRedirectionRoute";

const App = () => {
  return (
    <div data-theme="synthwave">
      <BrowserRouter>
        <LoginContextProvider>
          <TodoContextProvider>
            <ColorPaletteProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <LoginRedirectionRoute>
                      <LoginPage />
                    </LoginRedirectionRoute>
                  }
                />
                <Route
                  path="/todo"
                  element={
                    <PrivateRoute>
                      <TodoPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/notes"
                  element={
                    <PrivateRoute>
                      <NotesPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/colorPalette"
                  element={
                    <PrivateRoute>
                      <ColorPalette />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </ColorPaletteProvider>
          </TodoContextProvider>
        </LoginContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
