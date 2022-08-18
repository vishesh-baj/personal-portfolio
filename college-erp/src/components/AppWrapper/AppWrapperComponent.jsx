import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";
const AppWrapperComponent = ({ children }) => {
  const drawerInputRef = useRef(null);

  const handleDrawerToggle = () => {
    drawerInputRef.current.checked = false;
  };

  return (
    <div>
      <div className="drawer">
        <input
          ref={drawerInputRef}
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
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <NavLink to={PATHS.studentDetails}>Login</NavLink>
                </li>
                {/* <li>
                  <NavLink to={PATHS.facultyDetails}>Navbar Item 2</NavLink>
                </li> */}
              </ul>
            </div>
          </div>

          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 flex flex-col gap-2">
            {/* <!-- Sidebar content here --> */}
            <li onClick={handleDrawerToggle}>
              <NavLink to={PATHS.facultyDetails}>Navbar Item 1</NavLink>
            </li>
            <li onClick={handleDrawerToggle}>
              <NavLink to={PATHS.studentDetails}>Navbar Item 2</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppWrapperComponent;
