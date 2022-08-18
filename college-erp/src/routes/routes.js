import { PATHS } from "./paths";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import StudentDetailsPage from "../pages/StudentDetailsPage";
import FacultyDetailsPage from "../pages/FacultyDetailsPage";
import StockDetailsPage from "../pages/StockDetailsPage";
import ErrorPage from "../pages/ErrorPage";
const routes = [
  {
    key: "landingPage",
    path: PATHS.landingPage,
    element: LandingPage,
  },
  {
    key: "loginPage",
    path: PATHS.loginPage,
    element: LoginPage,
  },
  {
    key: "studentDetails",
    path: PATHS.studentDetails,
    element: StudentDetailsPage,
  },
  {
    key: "facultyDetails",
    path: PATHS.facultyDetails,
    element: FacultyDetailsPage,
  },
  {
    key: "stockDetails",
    path: PATHS.stocksDetails,
    element: StockDetailsPage,
  },
  {
    key: "errorPage",
    path: PATHS.errorPage,
    element: ErrorPage,
  },
];
export default routes;
