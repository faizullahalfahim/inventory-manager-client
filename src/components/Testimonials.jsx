import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "ML Engineer at TechFlow",
            comment: "This AI Inventory manager has completely transformed how our team tracks model versions. The UI is incredibly intuitive and fast!",
            image: "https://i.pravatar.cc/150?u=alex",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "Data Scientist",
            comment: "Finding the right framework specs used to take hours. Now, everything is in one place. Highly recommended for serious researchers.",
            image: "https://i.pravatar.cc/150?u=sarah",
            rating: 5
        },
        {
            id: 3,
            name: "David Miller",
            role: "AI Researcher",
            comment: "The best platform for managing large-scale model datasets. The dashboard analytics provide great insights into our model usage.",
            image: "https://i.pravatar.cc/150?u=david",
            rating: 4
        }
    ];

    return (
        <section className="py-24 bg-base-200/50">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">User Testimonials</h2>
                    <h1 className="text-3xl md:text-5xl font-black text-base-content leading-tight">
                        Loved by <span className="text-primary">Thousands</span> of Developers
                    </h1>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div 
                            key={review.id} 
                            className="bg-base-100 p-10 rounded-[2.5rem] shadow-sm border border-base-300 hover:shadow-2xl transition-all duration-500 relative group overflow-hidden"
                        >
                            {/* Quote Icon Background */}
                            <FaQuoteLeft className="absolute top-6 right-8 text-6xl text-primary/5 group-hover:text-primary/10 transition-colors" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500 text-sm" />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-base-content/70 italic leading-relaxed mb-8 relative z-10">
                                "{review.comment}"
                            </p>

                            {/* User Profile */}
                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review.image} alt={review.name} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-base-content">{review.name}</h4>
                                    <p className="text-xs text-base-content/50 font-medium uppercase tracking-tighter">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    <p className="font-bold text-xl uppercase tracking-widest italic">NVIDIA</p>
                    <p className="font-bold text-xl uppercase tracking-widest italic">Google AI</p>
                    <p className="font-bold text-xl uppercase tracking-widest italic">Microsoft</p>
                    <p className="font-bold text-xl uppercase tracking-widest italic">OpenAI</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;