import React from 'react';
import { useNavigate, useLoaderData } from 'react-router';
import { FaCodeBranch, FaMicrochip, FaDatabase, FaUserAlt, FaCalendarAlt, FaShoppingBag, FaDollarSign, FaRocket, FaArrowLeft } from 'react-icons/fa';

const ModelDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    
    
    const modelData = data?.result || data;

    if (!modelData || Object.keys(modelData).length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-gray-950">
                <p className="text-xl text-red-500">Model not found.</p>
            </div>
        );
    }
    
    const { name, image, framework, useCase, dataset, createdBy, createdAt, purchased, description, price } = modelData;
    
    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
            <div className="max-w-6xl mx-auto">

                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-400 hover:text-blue-300 mb-6 transition duration-200 text-lg font-medium"
                >
                    <FaArrowLeft className="mr-2" /> Go Back
                </button>
                
                <div className="bg-gray-900 rounded-2xl shadow-2xl border border-blue-700/50 overflow-hidden">
                    
                    <div className="p-8 border-b border-blue-800/50">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 tracking-wide">
                            {name}
                        </h1>
                        <p className="text-xl text-gray-400 mt-2 flex items-center">
                            <FaMicrochip className="mr-2 text-purple-400" />
                            Use Case: <span className="font-semibold ml-2 text-white">{useCase}</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                        
                        <div className="lg:col-span-1 space-y-6">
                            
                            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700 h-64 lg:h-72 w-full mx-auto"> 
                                <img 
                                    src={image} 
                                    alt={name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div className="bg-gray-800 p-5 rounded-xl border border-blue-700/50 shadow-inner space-y-3">
                                <h2 className="text-xl font-bold text-blue-400 border-b border-gray-700 pb-2 mb-3">Model Statistics</h2>
                                
                                <p className="flex items-center text-gray-300">
                                    <FaCodeBranch className="mr-3 text-lg text-green-400" />
                                    <span className="font-medium">Framework:</span> <span className="ml-auto font-bold">{framework}</span>
                                </p>
                                
                                <p className="flex items-center text-gray-300">
                                    <FaDatabase className="mr-3 text-lg text-yellow-400" />
                                    <span className="font-medium">Dataset:</span> <span className="ml-auto font-bold">{dataset}</span>
                                </p>
                                
                                <p className="flex items-center text-gray-300">
                                    <FaUserAlt className="mr-3 text-lg text-purple-400" />
                                    <span className="font-medium">Created By:</span> <span className="ml-auto font-bold truncate">{createdBy}</span>
                                </p>
                                
                                <p className="flex items-center text-gray-300">
                                    <FaCalendarAlt className="mr-3 text-lg text-cyan-400" />
                                    <span className="font-medium">Added On:</span> <span className="ml-auto font-bold">{formattedDate}</span>
                                </p>
                                
                                <p className="flex items-center text-gray-300">
                                    <FaShoppingBag className="mr-3 text-lg text-red-400" />
                                    <span className="font-medium">Purchased:</span> <span className="ml-auto font-bold">{purchased} times</span>
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
                                <h2 className="text-2xl font-bold text-blue-400 mb-3">Detailed Description</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            <div className="bg-blue-900/40 p-6 rounded-xl border-t-4 border-blue-500 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-4">
                                
                                <div className="text-center sm:text-left">
                                    <p className="text-gray-300 text-lg">Acquire Access For</p>
                                    <span className="text-4xl font-extrabold text-green-400 flex items-center justify-center sm:justify-start">
                                        <FaDollarSign className="text-3xl mr-1" />
                                        {price }
                                    </span>
                                </div>

                                <button
                                    className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-extrabold rounded-lg border-none shadow-2xl shadow-green-500/30 hover:bg-green-700 transition duration-200 transform hover:scale-[1.03]"
                                    onClick={() => alert(`Purchasing ${name}...`)}
                                >
                                    <FaRocket className="text-xl mr-2" /> Purchase Model
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelDetails;