import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import TodoPage from "../pages/TodoPage";
import NotesPage from "../pages/NotesPage";
import ColorPalettePage from "../pages/ColorPalettePage";
import { PATHS } from "./paths";
import React from "react";

const routes = [
  {
    path: PATHS.home,
    element: <HomePage />,
  },
  {
    path: PATHS.about,
    element: <AboutPage />,
  },
  {
    path: PATHS.contact,
    element: <ContactPage />,
  },
  {
    path: PATHS.login,
    element: <LoginPage />,
  },
  {
    path: PATHS.signup,
    element: <SignupPage />,
  },

  {
    path: PATHS.todo,
    element: <TodoPage />,
  },
];
export default routes;
