import React from "react";
import { Link, useLocation } from "react-router";
import { FaLock, FaRobot } from "react-icons/fa";

const AccessRequired = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-12">
      <div className="w-full max-w-lg bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center border border-blue-600/50 transform transition duration-500 hover:scale-[1.02]">
        <FaLock className="text-6xl text-red-500 mx-auto mb-4" />
        <FaRobot className="text-4xl text-blue-400 mx-auto mb-6" />

        <h2 className="text-4xl font-extrabold text-white mb-3 tracking-wide">
          Access Denied
        </h2>

        <p className="text-gray-300 mb-6 text-lg">
          This AI Inventory Manager service requires authentication. Please log
          in to manage, add, or view the advanced model details.
        </p>

        <p className="text-sm text-gray-400 mb-8">
          Your intended destination:{" "}
          <span className="text-blue-400 font-mono">{location.pathname}</span>
        </p>

        <Link
          to="/auth/login"
          state={{ from: location.pathname }}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg shadow-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-[1.05]"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            ></path>
          </svg>
          Proceed to Login
        </Link>
      </div>
    </div>
  );
};

export default AccessRequired;
