import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover flex flex-col h-full">
            <div className="relative pt-[75%] overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    {product.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-2">
                    {product.description}
                </p>

                <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto"
                >
                    View Details
                    <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
