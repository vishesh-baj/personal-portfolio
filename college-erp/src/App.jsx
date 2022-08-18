import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/AppWrapper/AppWrapper";
import routes from "./routes/routes";
const App = () => {
  return (
    <BrowserRouter>
      <div className="font-montserrat">
        <Navbar>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                element={<route.element />}
                path={route.path}
              />
            ))}
          </Routes>
        </Navbar>
      </div>
    </BrowserRouter>
  );
};
export default App;
