import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ children }) => {
  const toggleRef = useRef(null);

  const handleToggle = () => {
    toggleRef.current.checked = false;
  };
  return (
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
          <div className="flex-1 px-2 mx-2">Utility App</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <NavLink to="/todo">TODO</NavLink>
              </li>
              <li>
                <NavLink to="/notes">Notes</NavLink>
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
