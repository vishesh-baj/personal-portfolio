import React from "react";

const Navbar = ({ toggleNavigation }) => {
  const parentClass = `fixed ${
    toggleNavigation ? "translate-x-1/4" : "translate-x-[100%]"
  } top-0 h-screen w-full bg-teal-200 transition ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-[.8s]`;
  return <nav className={parentClass}>Navbar</nav>;
};

export default Navbar;
