import React from 'react';
import { FileText, Download, ArrowRight } from 'lucide-react';

const Catalogue = () => {
    const catalogues = [
        { title: 'Full 2026 Product Collection', size: '12.5 MB', type: 'PDF' },
        { title: 'Laptop Series Specifications', size: '4.2 MB', type: 'PDF' },
        { title: 'Professional Audio Guide', size: '3.8 MB', type: 'PDF' },
        { title: 'Smart Home Ecosystem', size: '5.1 MB', type: 'PDF' },
    ];

    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="bg-blue-600 py-20 mb-20 text-white">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Catalogue</h1>
                    <p className="text-xl text-white max-w-2xl mx-auto font-medium">
                        Access our complete range of products, technical specifications, and user guides.
                        Download what you need, when you need it.
                    </p>
                </div>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {catalogues.map((item, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-start justify-between mb-6">
                                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <FileText size={32} />
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wide">{item.type}</span>
                                    <span className="block text-xs font-medium text-gray-500">{item.size}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Comprehensive guide including detailed specs, feature comparisons, and compatibility charts.
                            </p>

                            <button className="w-full btn-outline flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                                <Download size={18} />
                                Download Now
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center bg-gray-50 rounded-3xl p-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Physical Copy?</h2>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                        We can mail a printed version of our premium catalogue directly to your office.
                        Just select "Request Physical Catalogue" in our contact form.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700">
                        Go to Contact Form
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Catalogue;
