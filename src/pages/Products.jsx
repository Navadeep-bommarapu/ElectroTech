import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { Filter } from 'lucide-react';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    const categories = ['All', ...new Set(productsData.map(p => p.category))];

    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProducts(productsData);
        } else {
            setFilteredProducts(productsData.filter(p => p.category === selectedCategory));
        }
    }, [selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSearchParams(category === 'All' ? {} : { category });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Browse our extensive collection of premium electronics. From high-performance laptops
                        to crystal-clear audio devices.
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-4 md:mb-0 text-gray-700 font-medium">
                        <Filter size={20} />
                        <span>Filter by Category:</span>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No products found in this category.</p>
                        <button
                            onClick={() => handleCategoryChange('All')}
                            className="mt-4 btn-primary"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
