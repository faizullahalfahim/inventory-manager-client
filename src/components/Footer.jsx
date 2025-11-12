import React from 'react';
import { FaTwitter, FaYoutube, FaFacebookF, FaMicrochip, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-gray-900 text-white p-10 shadow-2xl border-t border-blue-700/30">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <aside className="space-y-4 md:col-span-1">
                    <div className="flex items-center text-blue-400">
                        <FaMicrochip className="text-4xl mr-3" />
                        <span className="text-2xl font-extrabold tracking-wider">AI Model Hub</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Providing cutting-edge ML models and datasets for the future of technology.
                        <br />
                        Reliable technology solutions since 2025.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Copyright © {currentYear} - All rights reserved
                    </p>
                </aside>

                <nav className="space-y-3">
                    <h6 className="footer-title text-lg font-semibold text-blue-400 border-b border-gray-700 pb-2 mb-2">
                        Quick Links
                    </h6>
                    <a className="link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        Home
                    </a>
                    <a className="link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        All Models
                    </a>
                    <a className="link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        Add Model
                    </a>
                    <a className="link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        About Us
                    </a>
                </nav>

                <nav className="space-y-3">
                    <h6 className="footer-title text-lg font-semibold text-blue-400 border-b border-gray-700 pb-2 mb-2">
                        Legal
                    </h6>
                    <a className="link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        Terms of use
                    </a>
                    <a className="link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        Privacy policy
                    </a>
                    <a className="link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        Cookie policy
                    </a>
                    <a className="link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        License
                    </a>
                </nav>

                <nav className="space-y-3">
                    <h6 className="footer-title text-lg font-semibold text-blue-400 border-b border-gray-700 pb-2 mb-2">
                        Contact Us
                    </h6>
                    <p className="flex items-center text-gray-400">
                        <FaMapMarkerAlt className="mr-2 text-red-400" />
                        Dhaka, Bangladesh
                    </p>
                    <a href="mailto:support@aimodelhub.com" className="flex items-center link link-hover text-gray-400 hover:text-blue-300 transition duration-200">
                        <FaEnvelope className="mr-2 text-cyan-400" />
                        support@aimodelhub.com
                    </a>
                    
                    <div className="grid grid-flow-col gap-4 pt-3">
                        <a title="Twitter" className="text-gray-400 hover:text-blue-400 transition duration-200">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a title="YouTube" className="text-gray-400 hover:text-red-600 transition duration-200">
                            <FaYoutube className="text-2xl" />
                        </a>
                        <a title="Facebook" className="text-gray-400 hover:text-blue-600 transition duration-200">
                            <FaFacebookF className="text-2xl" />
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;