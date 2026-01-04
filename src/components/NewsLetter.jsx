import React from 'react';
import { FaPaperPlane, FaShieldAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        
        if (email) {
           
            Swal.fire({
                title: 'Subscribed!',
                text: 'Thank you for subscribing to our newsletter.',
                icon: 'success',
                confirmButtonColor: '#2563eb',
            });
            e.target.reset();
        }
    };

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-primary/20">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
                            <FaPaperPlane className="text-blue-200" />
                            <span className="text-xs font-bold uppercase tracking-widest">Join the ecosystem</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                            Stay Ahead with <br /> AI Model Updates
                        </h1>
                        <p className="text-blue-100 text-lg opacity-80 leading-relaxed max-w-md">
                            Get weekly insights about new machine learning models, frameworks, and datasets directly in your inbox.
                        </p>
                    </div>

                    {/* Subscription Form */}
                    <div className="flex-1 w-full max-w-md">
                        <div className="bg-white p-2 rounded-2xl md:rounded-full shadow-lg flex flex-col md:flex-row items-center gap-2">
                            <form onSubmit={handleSubscribe} className="w-full flex flex-col md:flex-row gap-2">
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your work email" 
                                    className="input w-full bg-transparent border-none text-gray-800 focus:outline-none focus:ring-0 pl-6 py-4"
                                    required
                                />
                                <button 
                                    type="submit"
                                    className="btn btn-primary rounded-xl md:rounded-full px-8 py-4 h-auto text-white border-none shadow-md hover:scale-105 transition-transform"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                        
                        {/* Trust Note */}
                        <p className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-white/60 text-sm">
                            <FaShieldAlt className="text-blue-300" /> 
                            Your data is safe. No spam, ever.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;