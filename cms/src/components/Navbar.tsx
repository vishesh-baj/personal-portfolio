import { PATHS } from "../paths";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <nav className="w-screen h-16 md:fixed flex items-center px-10 relative z-10">
        <div className="flex-1 cursor-pointer font-bold text-accent">LOGO</div>
        <div className=" md:flex-1 md:Flex hidden">
          <ul className="flex justify-center gap-10">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-accent" : "btn btn-sm btn-ghost"
              }
              to={PATHS.home}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-accent" : "btn btn-sm btn-ghost"
              }
              to={PATHS.about}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-accent" : "btn btn-sm btn-ghost"
              }
              to={PATHS.services}
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-accent" : "btn btn-sm btn-ghost"
              }
              to={PATHS.contact}
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="flex-1 md:flex justify-end hidden">
          <Link
            to={PATHS.login}
            className="btn btn-ghost btn-accent text-accent"
          >
            Login
          </Link>
        </div>

        <FaBars
          onClick={handleToggle}
          className="text-accent text-xl cursor-pointer md:hidden"
        />
      </nav>

      {/* mobile sidebar */}
      <div
        className={`w-3/4 h-screen bg-base-300 fixed top-0 transition ease-in-out duration-300 ${
          toggle ? `translate-x-0` : `-translate-x-72 md:hidden z-20`
        } `}
      ></div>
      <div className="hero-overlay absolute top-0 bottom-0 left-0 right-0"></div>
    </>
  );
};

export default Navbar;
