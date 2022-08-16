import React from "react";
import { Link } from "react-scroll";

const Navbar = ({ toggleNavigation, setNavToggle }) => {
  const handleClick = () => {
    setNavToggle(!toggleNavigation);
  };

  const parentClass = `fixed z-20 ${
    toggleNavigation ? "translate-x-1/4" : "translate-x-[100%]"
  } top-0 h-screen w-full bg-black transition ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-[.8s] bg-opacity-90`;
  return (
    <nav className={parentClass}>
      <ul className="w-full  h-screen p-10 flex flex-col gap-5 justify-center">
        <Link
          onClick={handleClick}
          to="section-1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          as="h1"
          className="text-8xl text-white hover:text-cyan-400  hover:border-b-cyan-400 transition ease-in-out duration-100 py-2 px-3 relative"
        >
          {/* TO BEADDED LATER */}
          {/* <div className="absolute left-[70vh] font-poppins text-8xl text-gray-800">
            घर
          </div> */}
          Home
        </Link>
        <Link
          onClick={handleClick}
          to="section-1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          as="h1"
          className="text-8xl text-white hover:text-cyan-400  hover:border-b-cyan-400 transition ease-in-out duration-100 py-2 px-3"
        >
          Services
        </Link>
        <Link
          onClick={handleClick}
          to="section-1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          as="h1"
          className="text-8xl text-white hover:text-cyan-400  hover:border-b-cyan-400 transition ease-in-out duration-100 py-2 px-3"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
