import React from 'react';
import { FaUserPlus, FaSearchPlus, FaCloudUploadAlt, FaCheckDouble } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Create Account",
            desc: "Join our community by signing up. It takes less than a minute to get started.",
            icon: <FaUserPlus />,
            color: "text-blue-500",
            borderColor: "border-blue-500"
        },
        {
            id: 2,
            title: "Browse or Add",
            desc: "Explore existing AI models or contribute by adding your own specialized models.",
            icon: <FaCloudUploadAlt />,
            color: "text-purple-500",
            borderColor: "border-purple-500"
        },
        {
            id: 3,
            title: "Analyze & Manage",
            desc: "Use your personal dashboard to track performance, framework specs, and datasets.",
            icon: <FaSearchPlus />,
            color: "text-emerald-500",
            borderColor: "border-emerald-500"
        },
        {
            id: 4,
            title: "Ready to Deploy",
            desc: "Once verified, your models are ready to be integrated into real-world applications.",
            icon: <FaCheckDouble />,
            color: "text-orange-500",
            borderColor: "border-orange-500"
        }
    ];

    return (
        <section className="py-24 bg-base-100 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-sm mb-4">Step-by-Step Guide</h2>
                    <h1 className="text-3xl md:text-5xl font-black text-base-content leading-tight mb-6">
                        Start Managing Your Models in <span className="text-primary underline decoration-wavy underline-offset-8">Minutes</span>
                    </h1>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-dashed border-t-2 border-dashed border-base-300 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center group">
                                
                                {/* Icon Circle */}
                                <div className={`w-24 h-24 rounded-full bg-base-100 border-4 ${step.borderColor} flex items-center justify-center text-3xl ${step.color} shadow-xl mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 relative`}>
                                    {step.icon}
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-base-content text-base-100 flex items-center justify-center text-sm font-bold">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center px-4">
                                    <h3 className="text-2xl font-black text-base-content mb-3 group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-base-content/60 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 p-1 pr-6 bg-base-200 rounded-full border border-base-300">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">Update</span>
                        <p className="text-sm font-medium">Over 2,000 models were added this month alone!</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;