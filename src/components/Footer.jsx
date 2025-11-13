import React from 'react';
import { FaTwitter, FaYoutube, FaFacebookF, FaMicrochip, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router'; 

const Footer = () => {
  

    return (
        <footer className="footer bg-base-300 text-base-content p-10 shadow-inner border-t border-base-content/10">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <aside className="space-y-4 md:col-span-1">
                    <div className="flex items-center text-primary">
                        <FaMicrochip className="text-4xl mr-3" />
                        <span className="text-2xl font-extrabold tracking-wider">AI Model Hub</span>
                    </div>
                    <p className="text-base-content/70 text-sm">
                        Providing cutting-edge ML models and datasets for the future of technology.
                        <br />
                        Reliable technology solutions since 2025.
                    </p>
                    <p className="text-base-content/50 text-sm">
                        Copyright © 2025 - All rights reserved
                    </p>
                </aside>

                <nav className="space-y-3">
                    <h6 className="footer-title text-lg font-semibold text-primary border-b border-base-content/20 pb-2 mb-2">
                        Quick Links
                    </h6>
                    <Link to="/" className="link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        Home
                    </Link>
                    <Link to="/allmodel" className="link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        All Models
                    </Link>
                    <Link to="/addmodel" className="link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        Add Model
                    </Link>
                    <Link to="/about" className="link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        About Us
                    </Link>
                </nav>

                <nav className="space-y-3">
                    <h6 className="footer-title text-lg font-semibold text-primary border-b border-base-content/20 pb-2 mb-2">
                        Legal
                    </h6>
                    <a className="link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        Terms of use
                    </a>
                    <a className="link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        Privacy policy
                    </a>
                    <a className="link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        Cookie policy
                    </a>
                    <a className="link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        License
                    </a>
                </nav>

                <nav className="space-y-3">
                    <h6 className="footer-title text-lg font-semibold text-primary border-b border-base-content/20 pb-2 mb-2">
                        Contact Us
                    </h6>
                    <p className="flex items-center text-base-content/80">
                        <FaMapMarkerAlt className="mr-2 text-error" />
                        Dhaka, Bangladesh
                    </p>
                    <a href="mailto:support@aimodelhub.com" className="flex items-center link link-hover text-base-content/80 hover:text-primary transition duration-200">
                        <FaEnvelope className="mr-2 text-info" />
                        support@aimodelhub.com
                    </a>
                    
                    <div className="grid grid-flow-col gap-4 pt-3">
                        <a title="Twitter" className="text-base-content/80 hover:text-[#1DA1F2] transition duration-200">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a title="YouTube" className="text-base-content/80 hover:text-[#FF0000] transition duration-200">
                            <FaYoutube className="text-2xl" />
                        </a>
                        <a title="Facebook" className="text-base-content/80 hover:text-[#1877F2] transition duration-200">
                            <FaFacebookF className="text-2xl" />
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;