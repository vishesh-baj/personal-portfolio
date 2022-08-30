import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ServicesPage from "../pages/ServicesPage";
import SignupPage from "../pages/SignupPage";
import { PATHS } from "../paths";

const routes = [
  {
    key: "home-route",
    Element: HomePage,
    path: PATHS.home,
  },
  {
    key: "about-route",
    Element: AboutPage,
    path: PATHS.about,
  },
  {
    key: "services-route",
    Element: ServicesPage,
    path: PATHS.services,
  },
  {
    key: "contact-route",
    Element: ContactPage,
    path: PATHS.contact,
  },
  {
    key: "dashboard",
    Element: DashboardPage,
    path: PATHS.dashboard,
  },
  {
    key: "login",
    Element: LoginPage,
    path: PATHS.login,
  },
  {
    key: "signup",
    Element: SignupPage,
    path: PATHS.signup,
  },
  {
    key: "error",
    Element: ErrorPage,
    path: PATHS.error,
  },
];

export default routes;
