import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../pages/ModelCard';
import { FaBoxes, FaSearch } from 'react-icons/fa';

const AllModels = () => {
    const data = useLoaderData(); 
    const [models, setModels] = useState(data || [])
    const handleSearch = (e) => {
        e.preventDefault()
        const search_text = e.target.search.value;
        console.log(search_text)
        fetch (`http://localhost:3000/search?search=${search_text}`)
        .then (res => res.json())
        .then (Search_data => {
            
            console.log(Search_data)
            setModels(Search_data)
        })
    }
    
    

    return (
        <div className="min-h-screen bg-gray-950 text-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                
                <header className="text-center mb-10 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white inline-block border-b-4 border-blue-600 pb-2">
                        Complete Model Inventory
                    </h1>
                    <p className="mt-4 text-xl text-gray-400">
                        Explore all {data.length} machine learning models available in our comprehensive catalog.
                    </p>
                </header>
                <form className="flex justify-center mb-16" onSubmit={handleSearch}> 
                    <div className="form-control w-full max-w-4xl">
                        <div className="input-group flex shadow-2xl rounded-xl overflow-hidden border border-blue-700/50 transition-all duration-300 hover:shadow-blue-500/20">
                            <input
                                type="text"
                                placeholder="Search models by name, use case, framework or dataset..."
                                name="search" 
                                className="input input-lg w-full bg-gray-800 text-white border-none focus:outline-none placeholder-gray-500 pl-6"
                               
                            />
                            <button 
                                type="submit" 
                                className="btn btn-lg bg-blue-600 text-white hover:bg-blue-700 border-none px-6 transition duration-200">
                                <FaSearch className="text-xl" />
                            </button>
                        </div>
                    </div>
                </form>

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

export default AllModels;