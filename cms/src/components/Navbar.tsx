import { PATHS } from "../paths";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-screen h-16 fixed flex items-center px-10">
      <div className="flex-1 cursor-pointer font-bold text-accent">LOGO</div>
      <div className="flex-1">
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
      <div className="flex-1 flex justify-end">
        <Link to={PATHS.login} className="btn btn-ghost btn-accent text-accent">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
