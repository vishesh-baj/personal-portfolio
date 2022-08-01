import React from "react";
import { IoLogoReact } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-screen h-[8vh] flex justify-between items-center  bg-primary px-10 md:px-20 ">
      <div className="flex items-center gap-5">
        <IoLogoReact className="animate-spin" size={30} />
        <h2 className="text-sm md:text-lg">React Json-Server</h2>
      </div>

      <div className="md:flex hidden gap-5  justify-between">
        <Link to="/login">
          <button className="btn btn-ghost">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-ghost">Signup</button>
        </Link>
      </div>

      <FaBars className="md:hidden block" size={20} />
    </nav>
  );
};

export default Navbar;
