import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
    const { user, signOutFunc } = useContext(AuthContext);
    
    const handleLogout = () => {
        signOutFunc()
        .then(() => {
            console.log('User logged out successfully');
        })
        .catch(error => {
            console.log(error);
        });
    }

    const userDropdownContent = (
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-900/95 text-gray-200 rounded-xl mt-3 w-56 p-3 shadow-2xl z-[10] border border-blue-700/50 backdrop-blur-sm"
      >
        <li className="p-2 mb-2 border-b border-blue-700/50">
          <p className="font-bold text-blue-400 text-base">{user?.displayName || "AI User"}</p>
          <p className="text-xs text-gray-400 break-words">{user?.email}</p>
        </li>
        
        <li>
          <Link to="/my-purchased-models" className="hover:bg-blue-800/50">
            My Purchased Models
          </Link>
        </li>
        
        <li>
          <Link to="/my-models" className="hover:bg-blue-800/50">
            My Models
          </Link>
        </li>
        
        <li>
          <a onClick={handleLogout} className="text-red-400 hover:bg-red-600/70 hover:text-white mt-1 font-semibold">
            <FaSignOutAlt /> Logout
          </a>
        </li>
      </ul>
    );

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 px-6 py-3 border-b border-blue-800/50">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="flex-none">
          <Link
            to="/"
            className="text-3xl font-extrabold text-blue-500 hover:text-blue-400 transition-colors duration-200 tracking-wider"
          >
            AI Inventory<span className="text-white font-light"> Manager</span>
          </Link>
        </div>

        <div className="flex-1 flex justify-center space-x-8 text-lg font-medium text-gray-300">
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
        </div>

        <div className="flex-none">
            { user? ( 
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar transition duration-150 hover:bg-blue-800/50"
                    >
                        <div className="w-10 rounded-full ring ring-blue-500 ring-offset-gray-900 ring-offset-2">
                            <img
                                alt="User Profile"
                                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                            />
                        </div>
                    </div>
                    {userDropdownContent} 
                </div>

            ):(
               <NavLink to="/auth/login"> 
                <button className="btn bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition duration-200 border-none">
                    <FaUserCircle className="text-lg" /> Login 
                </button>
              </NavLink>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;