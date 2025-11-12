import React from 'react';
import { FaCodeBranch, FaMicrochip, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const RecentCard = ({ model }) => {
    const navigate = useNavigate();
    const { _id, name, framework, description, image } = model;

    const handleViewDetails = () => {
        navigate(`/model-details/${_id}`);
    };

    return (
        <div className="card bg-gray-800 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 transform hover:-translate-y-1">
            
            <figure className="h-40 overflow-hidden border-b border-gray-700">
                <img 
                    src={image || "https://i.ibb.co/L8B8j7b/ai-model-placeholder.png"} 
                    alt={name} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-110" 
                />
            </figure>

            <div className="card-body p-5">
                
                <h2 className="card-title text-2xl font-bold text-blue-400 mb-2 truncate">
                    {name}
                </h2>

                <p className="flex items-center text-gray-400 text-sm">
                    <FaCodeBranch className="mr-2 text-green-400" />
                    <span className="font-semibold">Framework:</span> <span className="ml-2 font-medium text-white">{framework}</span>
                </p>

                <p className="text-gray-300 text-base mt-3 line-clamp-3 h-20">
                    {description}
                </p>

                <div className="card-actions justify-end mt-4">
                    <button 
                        onClick={handleViewDetails}
                        className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 border-none transition duration-300 flex items-center"
                    >
                        View Details 
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentCard;