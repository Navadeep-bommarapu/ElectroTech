import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative bg-gray-50 overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Decorative Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-200 blur-3xl opacity-30"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-primary font-semibold text-sm tracking-wide">
                            New Release 2026
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Experience Sound <br /> Like Never Before
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Introducing the Aero Headphones Pro. Immersive active noise cancellation,
                            30-hour battery life, and premium comfort for all-day listening.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/products" className="btn-primary flex items-center justify-center gap-2 group">
                                Explore Products
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="btn-outline">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
                                alt="Aero Headphones Pro"
                                className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-3xl"
                            />
                        </div>
                        {/* Decor element behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 backdrop-blur-sm rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
