import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import TodoPage from "../pages/TodoPage";
import NotesPage from "../pages/NotesPage";
import ColorPalettePage from "../pages/ColorPalettePage";
import { PATHS } from "./paths";
const routes = [
  {
    path: PATHS.home,
    element: <HomePage />,
  },
  {
    path: PATHS.contact,
    element: <ContactPage />,
  },
  {
    path: PATHS.about,
    element: <AboutPage />,
  },
  {
    path: PATHS.todo,
    element: <TodoPage />,
  },
  {
    path: PATHS.notes,
    element: <NotesPage />,
  },
  {
    path: PATHS.colorPalette,
    element: <ColorPalettePage />,
  },
];

export default routes;
