import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Truck } from 'lucide-react';
import productsData from '../data/products.json';

const ProductDetails = () => {
    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
                <Link to="/products" className="btn-primary">Back to Products</Link>
            </div>
        );
    }

    // Find related products (same category, different id)
    const relatedProducts = productsData
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="container-custom">
                {/* Back Button */}
                <Link to="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Back to Catalogue
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Image Gallery */}
                    <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-contain drop-shadow-xl"
                        />
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-4">
                            {product.category}
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Specs */}
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Key Specifications</h3>
                            <ul className="space-y-3">
                                {product.specs.map((spec, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600">
                                            <Check size={14} />
                                        </div>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Features / Services (Not buying options) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
                                <Shield className="text-blue-600" size={24} />
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">2 Year Warranty</h4>
                                    <p className="text-xs text-gray-500">Full coverage included</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
                                <Truck className="text-blue-600" size={24} />
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Free Global Shipping</h4>
                                    <p className="text-xs text-gray-500">On all orders over $50</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-4">
                            <button className="btn-primary flex-1 text-center">
                                Download Datasheet
                            </button>
                            <Link to="/contact" className="btn-outline flex-1 text-center">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
