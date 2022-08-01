import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import UpdateUser from "./pages/UpdateUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignupPage />} path="/signup" />
          <Route element={<DashboardPage />} path="/dashboard" />
          <Route element={<UpdateUser />} path="/update-user" />
          <Route element={<MainPage />} path="/main" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
