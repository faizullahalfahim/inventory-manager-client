import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const { user, signOutFunc } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    signOutFunc()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 border-b-2 border-blue-400 pb-1 transition-colors duration-150"
            : "hover:text-blue-400 transition-colors duration-150"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/allmodel"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 border-b-2 border-blue-400 pb-1 transition-colors duration-150"
            : "hover:text-blue-400 transition-colors duration-150"
        }
      >
        All Model
      </NavLink>

      <NavLink
        to="/addmodel"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 border-b-2 border-blue-400 pb-1 transition-colors duration-150"
            : "hover:text-blue-400 transition-colors duration-150"
        }
      >
        Add Model
      </NavLink>
    </>
  );

  const userDropdownContent = (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-200/95 text-base-content rounded-xl mt-3 w-56 p-3 shadow-2xl z-[10] border border-primary/50 backdrop-blur-sm"
    >
      <li className="p-2 mb-2 border-b border-primary/50">
        <p className="font-bold text-primary text-base">
          {user?.displayName || "AI User"}
        </p>
        <p className="text-xs text-base-content/70 break-words">
          {user?.email}
        </p>
      </li>

      <li>
        <Link to="/purchase" className="hover:bg-primary/20">
          My Purchased Models
        </Link>
      </li>

      <li>
        <Link to="/my-models" className="hover:bg-primary/20">
          My Models
        </Link>
      </li>

      <li>
        <a
          onClick={handleLogout}
          className="text-red-400 hover:bg-red-600/70 hover:text-white mt-1 font-semibold"
        >
          <FaSignOutAlt /> Logout
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="bg-base-100/90 backdrop-blur-md shadow-xl sticky top-0 z-50 px-6 py-3 border-b border-base-300">
      <div className="container mx-auto flex items-center justify-between">
        <div className="md:hidden flex-none">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-base-content hover:bg-base-200"
            >
              <FaBars className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-200/95 text-base-content rounded-xl mt-3 w-64 p-3 shadow-2xl z-[10] border border-primary/50 backdrop-blur-sm space-y-2"
            >
              <li className="text-lg font-medium">{navLinks}</li>
            </ul>
          </div>
        </div>

        <div className="flex-none md:flex-1 md:px-2">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold text-primary hover:text-primary/80 transition-colors duration-200 tracking-wider"
          >
            AI Inventory
            <span className="text-base-content font-light"> Manager</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg font-medium text-base-content">
          {navLinks}
        </div>

        <div className="flex-none flex items-center space-x-4">
          <button
            onClick={handleToggleTheme}
            className="btn btn-ghost btn-circle text-xl text-base-content transition duration-150 hover:bg-base-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-indigo-400" />
            )}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar transition duration-150 hover:bg-base-200"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    alt="User Profile"
                    src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  />
                </div>
              </div>
              {userDropdownContent}
            </div>
          ) : (
            <NavLink to="/auth/login">
              <button className="btn btn-primary text-white font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition duration-200 border-none">
                <FaUserCircle className="text-lg" />{" "}
                <span className="hidden sm:inline">Login</span>
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
