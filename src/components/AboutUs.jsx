import React from 'react';
import { FaRocket, FaEye, FaUsers, FaAward } from 'react-icons/fa';

const AboutUs = () => {
    const stats = [
        { id: 1, label: 'Models Managed', value: '500+', icon: <FaRocket className="text-primary" /> },
        { id: 2, label: 'Active Users', value: '10k+', icon: <FaUsers className="text-primary" /> },
        { id: 3, label: 'Success Rate', value: '99.9%', icon: <FaAward className="text-primary" /> },
    ];

    return (
        <div className="min-h-screen bg-base-100 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6 tracking-tight">
                        Revolutionizing <span className="text-primary italic">AI Inventory</span> Management
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                        We are a team of passionate tech enthusiasts committed to providing a seamless experience in discovering, managing, and deploying cutting-edge machine learning models.
                    </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 bg-base-200 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                            <FaRocket className="text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-base-content/70">
                            To democratize AI by providing an organized, accessible, and high-performance inventory system for developers and researchers worldwide.
                        </p>
                    </div>

                    <div className="p-8 bg-base-200 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                            <FaEye className="text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-base-content/70">
                            Becoming the global standard for AI asset management, where every complex model is just a click away from deployment.
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 bg-primary/5 py-12 rounded-[3rem] border border-primary/10">
                    {stats.map((stat) => (
                        <div key={stat.id} className="text-center space-y-2">
                            <div className="flex justify-center text-3xl mb-2">{stat.icon}</div>
                            <div className="text-4xl font-black text-base-content">{stat.value}</div>
                            <div className="text-sm uppercase tracking-widest text-base-content/50 font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Team / Culture Hint */}
                <div className="bg-base-300 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4 leading-tight text-center md:text-left">
                            Why Choose <br /> AI Model Hub?
                        </h2>
                    </div>
                    <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="badge badge-primary badge-xs mt-2"></div>
                            <p className="text-sm font-medium">Verified Framework Documentation</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="badge badge-primary badge-xs mt-2"></div>
                            <p className="text-sm font-medium">Real-time Inventory Tracking</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="badge badge-primary badge-xs mt-2"></div>
                            <p className="text-sm font-medium">Enterprise Grade Security</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="badge badge-primary badge-xs mt-2"></div>
                            <p className="text-sm font-medium">24/7 Expert Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;