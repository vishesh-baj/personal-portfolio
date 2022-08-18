import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
const App = () => {
  return (
    <BrowserRouter>
      <div className="font-montserrat">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              element={<route.element />}
              path={route.path}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
