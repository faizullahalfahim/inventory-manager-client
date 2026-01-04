import React from "react";
import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaMicrochip,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10 shadow-inner border-t border-base-content/10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Info */}
        <aside className="space-y-4 md:col-span-1">
          <div className="flex items-center text-primary">
            <FaMicrochip className="text-4xl mr-3" />
            <span className="text-2xl font-extrabold tracking-wider italic">
              AI<span className="text-base-content not-italic">Inventory</span>
            </span>
          </div>
          <p className="text-base-content/70 text-sm">
            Providing cutting-edge ML models and datasets for the future of
            technology.
            <br />
            Reliable technology solutions since 2026.
          </p>
          <p className="text-base-content/50 text-sm">
            Copyright © 2026 - All rights reserved
          </p>
        </aside>

        {/* Quick Links (Updated as per your request) */}
        <nav className="flex flex-col space-y-3">
          <h6 className="footer-title text-lg font-semibold text-primary border-b border-base-content/20 pb-2 mb-2">
            Quick Links
          </h6>
          <a
            href="https://www.facebook.com/faizullahalfahim"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 link link-hover text-base-content/80 hover:text-[#1877F2] transition duration-200"
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/faizullahalfahim20"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 link link-hover text-base-content/80 hover:text-[#0A66C2] transition duration-200"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
          <a
            href="https://github.com/faizullahalfahim"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 link link-hover text-base-content/80 hover:text-primary transition duration-200"
          >
            <FaGithub /> GitHub
          </a>
          <Link
            to="/about"
            className="link link-hover text-base-content/80 hover:text-primary pt-1"
          >
            About Us
          </Link>
        </nav>

        {/* Legal Section */}
        <nav className="flex flex-col space-y-3">
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
        </nav>

        {/* Contact Us */}
        <nav className="space-y-3">
          <h6 className="footer-title text-lg font-semibold text-primary border-b border-base-content/20 pb-2 mb-2">
            Contact Us
          </h6>
          <p className="flex items-center text-base-content/80">
            <FaMapMarkerAlt className="mr-2 text-error" />
            Riyadh, Saudi Arabia
          </p>
          <a
            href="mailto:support@aiinventory.com"
            className="flex items-center link link-hover text-base-content/80 hover:text-primary transition duration-200"
          >
            <FaEnvelope className="mr-2 text-info" />
            faizullahalfahim@gmail.com
          </a>
          <a
            href="tel:+966530221556"
            className="flex items-center link link-hover text-base-content/80 hover:text-success transition duration-200"
          >
            <FaPhoneAlt className="mr-2 text-success text-sm" />
            +966 53 022 1556
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
