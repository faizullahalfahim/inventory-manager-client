import React from 'react';
import { FaCheckCircle, FaRobot, FaCogs, FaLock } from 'react-icons/fa';

const WhyChooseUs = () => {
    const reasons = [
        {
            id: 1,
            title: "Expertly Curated Models",
            desc: "Every model in our inventory is verified for performance and framework compatibility.",
            icon: <FaRobot />
        },
        {
            id: 2,
            title: "Seamless Integration",
            desc: "One-click access to metadata and deployment guides for popular ML libraries.",
            icon: <FaCogs />
        },
        {
            id: 3,
            title: "Robust Security",
            desc: "Your data and models are protected with industry-standard encryption protocols.",
            icon: <FaLock />
        }
    ];

    return (
        <section className="py-20 bg-base-200/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left Side: Illustration or Image Content */}
                    <div className="flex-1 relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-base-100">
                            <img 
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
                                alt="AI Technology" 
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"></div>
                        
                        {/* Floating Success Card */}
                        <div className="absolute -bottom-6 left-6 bg-base-100 p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-primary/10 animate-bounce-slow">
                            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center text-success text-2xl">
                                <FaCheckCircle />
                            </div>
                            <div>
                                <p className="text-2xl font-black">99.9%</p>
                                <p className="text-xs font-bold text-base-content/50 uppercase">Uptime Guaranteed</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 italic">Experience the Best</h2>
                            <h1 className="text-3xl md:text-5xl font-black text-base-content leading-tight mb-6">
                                Why Industry Leaders Trust <span className="text-primary">AI Inventory</span>
                            </h1>
                            <p className="text-base-content/70 leading-relaxed text-lg">
                                We provide more than just a list of models. We provide a complete ecosystem to track, manage, and scale your artificial intelligence assets with ease.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {reasons.map((reason) => (
                                <div key={reason.id} className="flex gap-5 group">
                                    <div className="mt-1 w-12 h-12 rounded-xl bg-base-100 shadow-md flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors">{reason.title}</h3>
                                        <p className="text-base-content/60 text-sm mt-1 leading-relaxed">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button className="btn btn-primary btn-lg rounded-full px-10 text-white shadow-lg shadow-primary/30 border-none hover:scale-105 transition-transform">
                                Explore Our Features
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;