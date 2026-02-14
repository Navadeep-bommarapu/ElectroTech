import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { Laptop, Smartphone, Watch, Camera, Headphones, Speaker, Monitor } from 'lucide-react';
import products from '../data/products.json';
import { Link } from 'react-router-dom';

const Home = () => {
    const categories = [
        { label: 'Laptops', icon: Laptop, path: '/products?category=Laptops' },
        { label: 'Phones', icon: Smartphone, path: '/products?category=Phones' },
        { label: 'Watches', icon: Watch, path: '/products?category=Watches' },
        { label: 'Cameras', icon: Camera, path: '/products?category=Cameras' },
        { label: 'Headphones', icon: Headphones, path: '/products?category=Headphones' },
        { label: 'Accessories', icon: Speaker, path: '/products?category=Accessories' },
    ];

    const featuredProducts = products.slice(0, 4);
    const newArrivals = products.slice(4, 7);

    return (
        <>
            <HeroSection />

            {/* Categories Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our wide range of premium electronics designed to elevate your lifestyle.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((cat) => (
                            <CategoryCard key={cat.label} {...cat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
                            <p className="text-gray-600">Top picks from our diverse collection.</p>
                        </div>
                        <Link to="/products" className="hidden md:inline-flex font-semibold text-blue-600 hover:text-blue-700">
                            View All Products &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/products" className="btn-outline w-full justify-center">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* New Arrivals / Catalogue CTA */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-16 -mb-16 blur-2xl"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discovery Our Digital Catalogue</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Get access to our complete product lineup with detailed specifications and exclusive insights.
                                Download the full catalogue today.
                            </p>
                            <Link to="/catalogue" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                                Download Catalogue
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
