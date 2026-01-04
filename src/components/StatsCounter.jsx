import React from 'react';
import { FaMicrochip, FaUsers, FaCloudDownloadAlt, FaCodeBranch } from 'react-icons/fa';

const StatsCounter = () => {
    const stats = [
        {
            id: 1,
            icon: <FaMicrochip className="text-4xl text-primary" />,
            value: "500+",
            label: "AI Models",
            description: "Pre-trained & ready"
        },
        {
            id: 2,
            icon: <FaUsers className="text-4xl text-secondary" />,
            value: "12k+",
            label: "Developers",
            description: "Active community"
        },
        {
            id: 3,
            icon: <FaCloudDownloadAlt className="text-4xl text-accent" />,
            value: "85k+",
            label: "Downloads",
            description: "Global deployments"
        },
        {
            id: 4,
            icon: <FaCodeBranch className="text-4xl text-info" />,
            value: "25+",
            label: "Frameworks",
            description: "Library integrations"
        }
    ];

    return (
        <section className="py-16 bg-base-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div 
                            key={stat.id} 
                            className="bg-base-100 p-8 rounded-[2rem] shadow-sm border border-base-300 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="mb-4 p-4 bg-base-200 rounded-2xl">
                                {stat.icon}
                            </div>
                            <h2 className="text-4xl font-black text-base-content mb-1">
                                {stat.value}
                            </h2>
                            <p className="text-lg font-bold text-primary uppercase tracking-wider mb-2">
                                {stat.label}
                            </p>
                            <p className="text-sm text-base-content/60">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;