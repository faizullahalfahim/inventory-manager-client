import React from 'react';
import { useNavigate } from 'react-router';

const Banner = () => {
    const navigate = useNavigate();
    
    const slides = [
        {
            id: "slide1",
            title: "Manage Your AI Model Inventory",
            tagline: "Centralized • Efficient • Scalable",
            text: "Catalog, track, and deploy your Machine Learning models efficiently. Organize by framework, use case, and performance metrics.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5a191b4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            ctaText: "Explore All Models",
            ctaLink: "/models"
        },
        {
            id: "slide2",
            title: "Access Diverse Datasets & Frameworks",
            tagline: "TensorFlow • PyTorch • Keras • Scikit-Learn",
            text: "Find models built with the industry's leading frameworks. Understand the dataset and usage history for every asset in your inventory.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            ctaText: "Learn About Frameworks",
            ctaLink: "/about"
        },
        {
            id: "slide3",
            title: "Ready to Start Building?",
            tagline: "Join the Future of AI Development",
            text: "Join our platform to upload your own models, manage your assets, and collaborate with other developers.",
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            ctaText: "Get Started Now",
            ctaLink: "/register"
        }
    ];

    return (
        <div className="carousel w-full h-[85vh] lg:h-[90vh] bg-gray-900 shadow-xl">
            {slides.map((slide, index) => (
                <div 
                    key={slide.id}
                    id={slide.id} 
                    className="carousel-item relative w-full"
                >
                    <div
                        className="hero w-full h-full"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }}
                    >
                        <div className="hero-overlay bg-gradient-to-t from-gray-950 via-black/70 to-transparent"></div> 
                        <div className="hero-content text-neutral-content text-center py-24 md:py-32 px-6">
                            <div className="max-w-4xl animate-fade-in-up">
                                
                                <h2 className="mb-4 text-xl md:text-2xl font-medium text-blue-300 tracking-wide uppercase">
                                    {slide.tagline}
                                </h2>
                                
                                <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
                                    {slide.title}
                                </h1>
                                
                                <p className="mb-10 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                                    {slide.text}
                                </p>
                                
                                <button 
                                    onClick={() => navigate(slide.ctaLink)}
                                    className="btn btn-lg bg-blue-600 text-white border-none hover:bg-blue-700 font-semibold shadow-xl shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 px-8"
                                >
                                    {slide.ctaText}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a 
                            href={`#${slides[index === 0 ? slides.length - 1 : index - 1].id}`} 
                            className="btn btn-circle bg-white/10 backdrop-blur-sm border-none text-white opacity-70 hover:opacity-100 text-xl transition-all duration-200"
                        >
                            ❮
                        </a> 
                        <a 
                            href={`#${slides[index === slides.length - 1 ? 0 : index + 1].id}`} 
                            className="btn btn-circle bg-white/10 backdrop-blur-sm border-none text-white opacity-70 hover:opacity-100 text-xl transition-all duration-200"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;