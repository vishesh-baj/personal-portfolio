import React from "react";

const Navbar = ({ toggleNavigation, setNavToggle }) => {
  const handleClick = () => {
    setNavToggle(!toggleNavigation);
  };

  const parentClass = `fixed z-20 ${
    toggleNavigation ? "translate-x-1/4" : "translate-x-[100%]"
  } top-0 h-screen w-full bg-black transition ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-[.8s]`;
  return (
    <nav className={parentClass}>
      <ul className="w-full h-screen p-10 flex flex-col gap-5 justify-center">
        <li
          onMouseEnter={() => console.log("Entered Home")}
          onMouseLeave={() => console.log("Mouse Left")}
          onClick={handleClick}
          className="cursor-pointer"
        >
          <h1 className="text-8xl text-white hover:text-cyan-400  hover:border-b-cyan-400 transition ease-in-out duration-100 py-2 px-3">
            Home
          </h1>
        </li>
        <li onClick={handleClick} className="cursor-pointer">
          <h1 className="text-8xl text-white hover:text-cyan-400  hover:border-b-cyan-400 transition ease-in-out duration-100 py-2 px-3">
            About
          </h1>
        </li>
        <li onClick={handleClick} className="cursor-pointer">
          <h1 className="text-8xl text-white hover:text-cyan-400  hover:border-b-cyan-400 transition ease-in-out duration-100 py-2 px-3">
            Services
          </h1>
        </li>
        <li onClick={handleClick} className="cursor-pointer">
          <h1 className="text-8xl text-white hover:text-cyan-400  hover:border-b-cyan-400 transition ease-in-out duration-100 py-2 px-3">
            Contact
          </h1>
        </li>
        <li onClick={handleClick} className="cursor-pointer">
          <h1 className="text-8xl text-white hover:text-cyan-400  hover:border-b-cyan-400 transition ease-in-out duration-100 py-2 px-3">
            Projects
          </h1>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
