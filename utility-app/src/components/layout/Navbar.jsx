import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../routes/paths";
const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="w-screen flex justify-between px-10 py-5">
        {/* LOGO TO BE ADDED */}
        <h3 className="text-info font-bold">DaisyUI</h3>
        <div className="flex gap-5">
          <Link to={PATHS.homePage} className="btn text-white btn-sm btn-ghost">
            Home
          </Link>
          <Link
            to={PATHS.utilitiesPage}
            className="btn text-white btn-sm btn-ghost"
          >
            Utilities
          </Link>
          <Link
            to={PATHS.aboutPage}
            className="btn text-white btn-sm btn-ghost"
          >
            About
          </Link>
          <Link
            to={PATHS.contactPage}
            className="btn text-white btn-sm btn-ghost"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
