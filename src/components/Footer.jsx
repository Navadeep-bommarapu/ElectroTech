import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600 text-white p-2 rounded-lg">
                                <Zap size={24} fill="currentColor" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                Electro<span className="text-blue-400">Tech</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Leading the way in consumer electronics. We bring the latest technology to your fingertips with premium quality and design.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-blue-600 pl-3">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Products', path: '/products' },
                                { name: 'Catalogue', path: '/catalogue' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-blue-600 pl-3">Categories</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Laptops', path: '/products?category=Laptops' },
                                { name: 'Smartphones', path: '/products?category=Phones' },
                                { name: 'Watches', path: '/products?category=Watches' },
                                { name: 'Cameras', path: '/products?category=Cameras' },
                                { name: 'Audio', path: '/products?category=Headphones' },
                                { name: 'Accessories', path: '/products?category=Accessories' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-blue-600 pl-3">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-blue-600 mt-1 shrink-0" />
                                <span>123 Innovation Dr,<br />Tech City, TC 94000</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={20} className="text-blue-600 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="text-blue-600 shrink-0" />
                                <span>hello@electrotech.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} ElectroTech. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
