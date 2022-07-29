import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes/routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map(({ element, path }) => (
            <Route element={element} path={path} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
