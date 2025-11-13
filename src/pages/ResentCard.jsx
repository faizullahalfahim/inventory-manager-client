import React from "react";
import { FaArrowRight, FaCodeBranch } from "react-icons/fa";
import { useNavigate } from "react-router";

const RecentCard = ({ model }) => {
  const navigate = useNavigate();
  const { _id, name, framework, description, image } = model;

  const handleViewDetails = () => {
    navigate(`/model-details/${_id}`);
  };

  return (
    <div className="card bg-white shadow-md dark:bg-gray-900 dark:shadow-lg transition-transform transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <figure className="h-44 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <img
          src={image || "https://i.ibb.co/L8B8j7b/ai-model-placeholder.png"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </figure>

      <div className="card-body p-5">
        <h2 className="card-title text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 truncate">
          {name}
        </h2>

        <p className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <FaCodeBranch className="mr-2 text-green-600 dark:text-green-400" />
          <span className="font-semibold mr-2 text-gray-700 dark:text-gray-200">Framework:</span>
          <span className="font-medium text-gray-900 dark:text-white">{framework}</span>
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-sm mt-3 line-clamp-3 min-h-[4.5rem]">
          {description}
        </p>

        <div className="card-actions justify-end mt-4">
          <button
            onClick={handleViewDetails}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md dark:shadow-black/40 transition"
          >
            View Details
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
