import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
const App = () => {
  return (
    <div data-theme="dark">
      <BrowserRouter>
        <Routes>
          {routes.map(({ key, Element, path }) => (
            <Route key={key} element={<Element />} path={path} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
