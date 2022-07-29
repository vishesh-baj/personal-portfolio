import React from "react";
import { FaIceCream } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { PATHS } from "../routes/paths";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className="navbar w-9/12 bg-secondary fixed z-10 rounded-full mt-4 ">
        <div className="container mx-auto flex justify-between">
          {/* LOGO */}
          <NavLink className="ml-4" to={PATHS.home}>
            <FaIceCream size="30" color="#EF9994" />
          </NavLink>

          {/* NAVIGATION LINKS */}
          <ul className=" gap-5 hidden md:flex">
            <li>
              <NavLink
                to={PATHS.home}
                className={({ isActive }) =>
                  isActive
                    ? " btn btn-primary rounded-full text-white hover:bg-primary"
                    : " btn btn-ghost rounded-full text-white hover:bg-primary"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={PATHS.about}
                className={({ isActive }) =>
                  isActive
                    ? " btn btn-primary rounded-full text-white hover:bg-primary"
                    : " btn btn-ghost rounded-full text-white hover:bg-primary"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={PATHS.contact}
                className={({ isActive }) =>
                  isActive
                    ? " btn btn-primary rounded-full text-white hover:bg-primary"
                    : " btn btn-ghost rounded-full text-white hover:bg-primary"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
