import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const NavbarWrapper = ({ children }) => {
  const checkboxRef = useRef(null);

  const handleEscape = () => {
    // your logic here
    return (checkboxRef.current.checked = false);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Escape") {
        event.preventDefault();

        // 👇️ your logic here
        handleEscape();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className="drawer">
        <input
          ref={checkboxRef}
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
              {/* DESKTOP NAVITEMS */}
              <ul className="menu menu-horizontal">
                <li>
                  <NavLink
                    className={(props) =>
                      props.isActive
                        ? "btn btn-primary text-white"
                        : "btn btn-ghost"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(props) =>
                      props.isActive
                        ? "btn btn-primary text-white"
                        : "btn btn-ghost"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          {/* MOBILE NAVITEMS */}
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-3">
            <li>
              <NavLink
                className={(props) =>
                  props.isActive
                    ? "btn btn-primary text-white"
                    : "btn btn-ghost"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(props) =>
                  props.isActive
                    ? "btn btn-primary text-white"
                    : "btn btn-ghost"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarWrapper;
