import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import {
  FaSignOutAlt,
  FaBars,
  FaMoon,
  FaSun,
  FaThLarge,
  FaUserAlt,
  FaHome,
  FaBoxOpen,
  FaInfoCircle,
  FaPlusSquare,
  FaTimes,
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
      .then(() => console.log("Logged out"))
      .catch((err) => console.log(err));
  };

  const allNavLinks = (
    <>
      <li>
        <NavLink to="/" className={({isActive}) => `flex items-center gap-3 py-3 rounded-xl ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}>
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allmodel" className={({isActive}) => `flex items-center gap-3 py-3 rounded-xl ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}>
          <FaBoxOpen /> All Models
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({isActive}) => `flex items-center gap-3 py-3 rounded-xl ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}>
          <FaInfoCircle /> About Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addmodel" className={({isActive}) => `flex items-center gap-3 py-3 rounded-xl ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}>
              <FaPlusSquare /> Add Model
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({isActive}) => `flex items-center gap-3 py-3 rounded-xl ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'}`}>
              <FaThLarge /> Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="drawer z-50">
      {/* Drawer Toggle */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="bg-base-100/90 backdrop-blur-md shadow-md sticky top-0 z-40 border-b border-base-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              
              <div className="flex items-center gap-2">
                {/* Hamburger Button to trigger Sidebar */}
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost btn-circle drawer-button hover:bg-primary/10 transition-colors"
                >
                  <FaBars className="text-2xl text-primary" />
                </label>

                <Link to="/" className="flex items-center ml-2">
                  <span className="text-xl md:text-2xl font-black tracking-tighter text-primary italic">
                    AI
                    <span className="text-base-content not-italic font-bold">Inventory</span>
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={handleToggleTheme} className="btn btn-ghost btn-circle">
                  {theme === "dark" ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-indigo-600 text-xl" />}
                </button>

                {user ? (
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} alt="User" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="mt-4 z-[1] p-3 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-60 border border-base-200">
                      <li className="mb-2 p-3 bg-primary/5 rounded-xl text-center">
                        <p className="font-bold text-primary truncate">{user?.displayName}</p>
                        <p className="text-[10px] opacity-60 truncate">{user?.email}</p>
                      </li>
                      <li>
                        <Link to="/dashboard/profile" className="py-3 flex items-center gap-3">
                          <FaUserAlt className="text-primary" /> My Profile
                        </Link>
                      </li>
                      <div className="divider my-1"></div>
                      <li>
                        <button onClick={handleLogout} className="btn btn-error btn-outline btn-sm mt-2 w-full flex items-center justify-center gap-2">
                          <FaSignOutAlt /> Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-primary px-6 text-white rounded-full shadow-lg font-bold border-none">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar (Drawer Side) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-6 w-80 min-h-full bg-base-100 text-base-content border-r border-base-200 shadow-2xl">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-black text-primary italic">
              AI<span className="text-base-content not-italic">Inventory</span>
            </span>
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle btn-sm">
              <FaTimes className="text-xl" />
            </label>
          </div>
          
          {/* Navigation Links */}
          <ul className="space-y-2 text-lg font-medium">
            <p className="text-xs uppercase tracking-widest text-base-content/40 font-bold mb-4">Main Menu</p>
            {allNavLinks}
          </ul>

          {/* User Info in Sidebar (Optional) */}
          {user && (
             <div className="mt-auto pt-6 border-t border-base-200">
                <div className="flex items-center gap-4 mb-4">
                    <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                    <div className="overflow-hidden">
                        <h4 className="font-bold truncate">{user?.displayName}</h4>
                        <p className="text-xs opacity-60 truncate">{user?.email}</p>
                    </div>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;