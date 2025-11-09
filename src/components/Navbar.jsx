import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {

    const result = useContext(AuthContext);
    console.log(result);
  return (
    <nav className="bg-base-100 shadow-sm  top-0 z-50 px-6 py-3">
      <div className="container mx-auto flex items-center">
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            Inventory Manager
          </Link>
        </div>

        <div className="flex-1 flex justify-center space-x-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/allmodel"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            All Model
          </NavLink>

          <NavLink
            to="/addmodel"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            Add Model
          </NavLink>
        </div>

        <div className="flex-1 flex justify-end">
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-blue-400 ring-offset-base-100 ring-offset-2">
                <img
                  alt="User Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
          <NavLink to="/auth/login"> 
            <button className="btn bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-150">Login </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
