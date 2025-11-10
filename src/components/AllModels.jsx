import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../pages/ModelCard';

const AllModels = () => {
    const data = useLoaderData();
    console.log (data);
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center my-8">All Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {
                    data.map ( model => <ModelCard key={model._id} model={model}> </ModelCard>)
                }
            </div>
            
        </div>
    );
};

export default AllModels;