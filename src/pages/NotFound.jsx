import React from 'react';
import { useNavigate } from 'react-router';
import { FaExclamationTriangle, FaArrowLeft, FaHome } from 'react-icons/fa';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-6">
            <div className="text-center max-w-lg bg-gray-900 p-10 md:p-12 rounded-2xl shadow-2xl border border-blue-700/50 transform transition duration-500 hover:scale-[1.01]">
                
                <FaExclamationTriangle className="text-8xl text-red-500 mx-auto mb-6 animate-pulse" />
                
                <h1 className="text-6xl md:text-8xl font-extrabold text-blue-400 mb-4 tracking-wider">
                    404
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Model Not Found!
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Sorry, the AI model catalog or page you requested does not exist on our inventory.
                    Perhaps the model has been retired or the URL is incorrect.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-md shadow-blue-500/30"
                    >
                        <FaHome className="mr-2" /> Go to Home
                    </button>
                    
                    <button
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto px-6 py-3 bg-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 transition duration-300 flex items-center justify-center shadow-md"
                    >
                        <FaArrowLeft className="mr-2" /> Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;