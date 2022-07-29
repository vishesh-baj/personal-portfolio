import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map(({ element, path }) => {
          return <Route key={path} element={element} path={path} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
