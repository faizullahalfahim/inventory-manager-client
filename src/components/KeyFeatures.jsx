import React from 'react';
import { FaShieldAlt, FaSync, FaChartLine, FaLayerGroup } from 'react-icons/fa';

const KeyFeatures = () => {
    const features = [
        {
            id: 1,
            title: "Advanced Inventory Tracking",
            description: "Manage all your machine learning models in one place with real-time status updates and categorization.",
            icon: <FaLayerGroup />,
            color: "bg-blue-500"
        },
        {
            id: 2,
            title: "Multi-Framework Support",
            description: "Seamlessly integrate with PyTorch, TensorFlow, Keras, and Scikit-learn without any compatibility issues.",
            icon: <FaSync />,
            color: "bg-purple-500"
        },
        {
            id: 3,
            title: "Performance Analytics",
            description: "Get detailed insights and analytics on model usage and performance metrics directly from your dashboard.",
            icon: <FaChartLine />,
            color: "bg-emerald-500"
        },
        {
            id: 4,
            title: "Secure Data Management",
            description: "Enterprise-grade security ensures that your proprietary models and datasets remain protected and private.",
            icon: <FaShieldAlt />,
            color: "bg-orange-500"
        }
    ];

    return (
        <section className="py-20 bg-base-100">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-3">Core Features</h2>
                    <h1 className="text-3xl md:text-5xl font-black text-base-content leading-tight">
                        Powering the Future of <span className="text-primary italic">AI Management</span>
                    </h1>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature) => (
                        <div 
                            key={feature.id} 
                            className="group p-8 bg-base-200/50 rounded-[2.5rem] border border-base-300 hover:border-primary/30 transition-all duration-500 hover:bg-base-100 shadow-sm hover:shadow-2xl flex flex-col md:flex-row gap-6 items-start"
                        >
                            {/* Icon Wrapper */}
                            <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                {feature.icon}
                            </div>
                            
                            {/* Content */}
                            <div>
                                <h3 className="text-2xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-base-content/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;