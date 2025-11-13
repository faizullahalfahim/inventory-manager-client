import React from 'react';
import { FaMicrochip, FaCodeBranch, FaUserAlt, FaDatabase, FaShoppingBag, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router';

const ModelCard = ({ model }) => {
    
    const { name, image, framework, useCase, dataset, createdBy, purchased, description } = model;

    return (
        <div className="bg-base-200/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-primary/40 flex flex-col transition-all duration-300 hover:shadow-primary/50 hover:-translate-y-1">
            
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-90"
                />
                <span className="absolute top-3 right-3 bg-primary text-primary-content text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center">
                    <FaCodeBranch className="mr-1 text-sm" /> {framework }
                </span>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                
                <h3 className="text-2xl font-bold text-base-content mb-2 truncate" title={model.name}>
                    {model.name}
                </h3>
                <p className="text-primary text-sm mb-4 flex items-center">
                    <FaMicrochip className="mr-2" /> 
                    <span className="font-medium">{useCase}</span>
                </p>
                
                <p className="text-base-content/70 text-sm flex items-center mb-3">
                    <FaBookOpen className="mr-2 text-primary" />
                    {description.substring(0, 70)}...
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    
                    <div className="flex items-center text-base-content/80">
                        <FaDatabase className="mr-2 text-warning" />
                        Dataset: <span className="font-semibold ml-1 truncate">{dataset}</span>
                    </div>
                    <div className="flex items-center text-base-content/80">
                        <FaShoppingBag className="mr-2 text-success" />
                        Purchased: <span className="font-semibold ml-1">{purchased || 0}</span>
                    </div>
                    
                    <div className="flex items-center text-base-content/80 col-span-2">
                        <FaUserAlt className="mr-2 text-secondary" />
                        Creator: <span className="font-semibold ml-1 truncate">{createdBy }</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-base-content/20 flex justify-end items-center">
                    
                    <Link 
                        to={`/model-details/${model._id}`} 
                        className="btn btn-primary btn-sm text-primary-content shadow-md shadow-primary/30"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;