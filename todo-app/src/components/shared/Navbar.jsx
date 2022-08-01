import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between mx-auto w-screen px-10 bg-base-100 shadow-xl">
        <Link
          to="/"
          className="normal-case text-xl  font-bold text-primary hover:text-accent"
        >
          UTILITY
        </Link>
        <ul className="flex gap-5">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " btn btn-sm btn-primary" : "btn btn-sm btn-accent"
              }
              to="/todo"
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " btn btn-sm btn-primary" : "btn btn-sm btn-accent"
              }
              to="/notes"
            >
              Notes
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
