import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import NotesPage from "./pages/NotesPage";
import ColorPalette from "./pages/ColorPallettePage";
import { LoginContextProvider } from "./context/LoginContext";
import { TodoContextProvider } from "./context/TodoContext";

const App = () => {
  return (
    <div data-theme="dark">
      <LoginContextProvider>
        <TodoContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/colorPalette" element={<ColorPalette />} />
            </Routes>
          </BrowserRouter>
        </TodoContextProvider>
      </LoginContextProvider>
    </div>
  );
};

export default App;
