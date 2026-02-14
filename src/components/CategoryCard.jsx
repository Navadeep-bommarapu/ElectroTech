import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ icon: Icon, label, path }) => {
    return (
        <Link
            to={path || '/products'}
            className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-blue-100"
        >
            <div className="mb-4 p-4 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {label}
            </h3>
        </Link>
    );
};

export default CategoryCard;
