import React from 'react';

import { FaMicrochip, FaCodeBranch, FaUserAlt, FaDatabase, FaShoppingBag, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router';

const ModelCard = ({ model }) => {
    
    const { name, image, framework, useCase, dataset, createdBy, purchased, description } = model;

    return (
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-blue-700/50 flex flex-col transition-all duration-300 hover:shadow-blue-500/50 hover:-translate-y-1">
            
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-90"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center">
                    <FaCodeBranch className="mr-1 text-sm" /> {framework }
                </span>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                
                <h3 className="text-2xl font-bold text-white mb-2 truncate" title={model.name}>
                    {model.name}
                </h3>
                <p className="text-blue-400 text-sm mb-4 flex items-center">
                    <FaMicrochip className="mr-2" /> 
                    <span className="font-medium">{useCase}</span>
                </p>
                
                <p className="text-gray-400 text-sm flex items-center mb-3">
                    <FaBookOpen className="mr-2 text-blue-500" />
                    {description.substring(0, 70)}...
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    
                    <div className="flex items-center text-gray-300">
                        <FaDatabase className="mr-2 text-yellow-400" />
                        Dataset: <span className="font-semibold ml-1 truncate">{dataset}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                        <FaShoppingBag className="mr-2 text-green-400" />
                        Purchased: <span className="font-semibold ml-1">{purchased || 0}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-300 col-span-2">
                        <FaUserAlt className="mr-2 text-purple-400" />
                        Creator: <span className="font-semibold ml-1 truncate">{createdBy }</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-700 flex justify-end items-center">
                    
                    <Link 
                        to={`/model-details/${model._id}`} 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow-md shadow-blue-500/30"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;