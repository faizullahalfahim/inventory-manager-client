import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import ModelCard from '../pages/ModelCard'; 
import { FaUserTag } from 'react-icons/fa';

const MyModels = () => {
    const { user } = useContext(AuthContext);
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user || !user.email) {
            if (user === null) {
                setLoading(false);
                setError("Please log in to view your models.");
            }
            return;
        }

        setLoading(true);
        setError(null);

        fetch(`https://inventory-maneger-server.vercel.app/my-models?email=${user.email}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data.");
                }
                return res.json();
            })
            .then(data => {
                setModels(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch Error:", err);
                setError("Failed to load your models. Please check server status and API route.");
                setLoading(false);
            });
            
    }, [user]); 

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin border-t-transparent"></div>
                    <p className="mt-4 text-lg font-semibold text-gray-400">
                        Please wait ...  Loading DaTa
                    </p>
                </div>
            </div>
        );
    }
    
    

   

    return (
        <div className="min-h-screen bg-gray-950 text-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-blue-400 mb-10 border-b-2 border-blue-600 pb-2">
                    My Added AI Models ({models.length})
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        models.map(model => (
                            <ModelCard 
                                key={model._id} 
                                model={model} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyModels;