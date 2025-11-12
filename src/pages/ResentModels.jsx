import React, { useEffect, useState } from 'react';

import { FaFire, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import RecentCard from './ResentCard';

const ResentModels = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/latest-models')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch latest models');
                }
                return res.json();
            })
            .then((data) => {
                setData(data.slice(0, 6)); 
            })
            .catch((error) => {
                console.error("Fetching error:", error);
            });
    }, []);
  
    if (data.length === 0) {
        return (
            <div className="text-center py-16 bg-gray-950 text-gray-400">
                <p>Loading recent models or no models available...</p>
            </div>
        );
    }

    return (
        <div className="py-16 md:py-24 bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400 flex items-center justify-center">
                        <FaFire className="mr-2 text-xl" />
                        Trending Now
                    </h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Latest Additions to Our Inventory
                    </p>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                        Check out the most recently added and high-performing AI models across various domains.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        data.map(model => (
                            <RecentCard key={model._id} model={model} />
                        ))
                    }
                </div>
                
                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/allmodel')} 
                        className="btn btn-lg bg-indigo-600 text-white hover:bg-indigo-700 border-none font-semibold shadow-lg shadow-indigo-500/30 transition duration-300 flex items-center mx-auto"
                    >
                        View All Models
                        <FaArrowRight className="ml-3" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResentModels;