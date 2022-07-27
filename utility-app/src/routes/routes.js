import { PATHS } from "./paths";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import TodoPage from "../pages/TodoPage";
import NotesPage from "../pages/NotesPage";
import UtilitiesPage from "../pages/UtilitiesPage";
import LoginPage from "../pages/LoginPage";
const routes = [
  {
    path: PATHS.homePage,
    element: <HomePage />,
  },
  {
    path: PATHS.aboutPage,
    element: <AboutPage />,
  },
  {
    path: PATHS.contactPage,
    element: <ContactPage />,
  },
  {
    path: PATHS.utilitiesPage,
    element: <UtilitiesPage />,
  },
  {
    path: PATHS.todoPage,
    element: <TodoPage />,
  },
  {
    path: PATHS.notesPage,
    element: <NotesPage />,
  },
  {
    path: PATHS.pomodoroPage,
    element: <pomodoroPage />,
  },
  {
    path: PATHS.loginPage,
    element: <LoginPage />,
  },
];

export default routes;
