import React from 'react';
import { Users, Target, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Innovating for Tomorrow</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        ElectroTech is a global leader in consumer electronics, dedicated to creating products
                        that combine cutting-edge technology with intuitive design.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team working"
                            className="rounded-3xl shadow-xl w-full"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-xs hidden md:block">
                            <p className="text-primary font-bold text-4xl mb-1">10+</p>
                            <p className="text-gray-600 font-medium">Years of Innovation</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Founded in 2014, ElectroTech began with a simple mission: to make high-quality technology
                            accessible to everyone. What started as a small team of engineers in a garage has
                            grown into a multinational brand known for reliability and style.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We believe that technology should empower people to do more, create more, and connect more.
                            That's why every product we design is centered around the user experience.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Target,
                            title: 'Mission',
                            desc: 'To design products that seamlessly integrate into modern life.'
                        },
                        {
                            icon: Users,
                            title: 'Community',
                            desc: 'Building a global community of creators and tech enthusiasts.'
                        },
                        {
                            icon: Globe,
                            title: 'Sustainability',
                            desc: 'Committed to eco-friendly manufacturing and packaging.'
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-md transition-shadow">
                            <div className="inline-block p-4 bg-white rounded-full text-primary shadow-sm mb-6">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
