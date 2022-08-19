import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "../context/LoginContext";
const Navbar = ({ children }) => {
  // this is used to toggle sidebar with navlinks
  const toggleRef = useRef(null);
  const { logout } = useContext(LoginContext);
  const handleToggle = () => {
    toggleRef.current.checked = false;
  };

  const handleLogout = () => {
    logout();
  };
  return (
    // Navigatrion bar along with drawer for the side bar

    <div className="drawer">
      <input
        ref={toggleRef}
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
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
          <div className="flex-1 px-2 mx-2">
            <div className="flex gap-5  justify-between w-full">
              <h1> Utility App</h1>
              <button
                onClick={handleLogout}
                className="btn btn-primary btn-sm md:hidden"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <NavLink to="/todo">Todo</NavLink>
              </li>
              <li>
                <NavLink to="/notes">Notes</NavLink>
              </li>
              <li>
                <NavLink to="/colorPalette">Colors</NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li onClick={handleToggle}>
            <NavLink to="/todo">Todo</NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/notes">Notes</NavLink>
          </li>

          <li>
            <NavLink onClick={handleToggle} to="/colorPalette">
              Colors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
