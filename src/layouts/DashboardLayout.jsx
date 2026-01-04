import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { FaBox, FaShoppingBag, FaPlusCircle, FaUserCircle, FaChartBar, FaThLarge } from 'react-icons/fa';
import Navbar from '../components/Navbar'; // আপনার নেভবার কম্পোনেন্টের পাথ দিন
import Footer from '../components/Footer'; // আপনার ফুটার কম্পোনেন্টের পাথ দিন

const DashboardLayout = () => {
    const sideLinks = [
        { name: "Statistics", path: "/dashboard", icon: <FaChartBar /> }, // ডিফল্ট স্ট্যাটস রাউট
        { name: "My Models", path: "my-models", icon: <FaBox /> },
        { name: "My Purchase", path: "my-purchase", icon: <FaShoppingBag /> },
        { name: "Add New Model", path: "add-model", icon: <FaPlusCircle /> },
        { name: "My Profile", path: "profile", icon: <FaUserCircle /> },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-base-200">
            {/* ১. নেভবার সেকশন */}
            <Navbar />

            {/* ২. মেইন ড্যাশবোর্ড এরিয়া (Sidebar + Content) */}
            <div className="flex flex-col lg:flex-row flex-1">
                {/* Sidebar Menu */}
                <aside className="w-full lg:w-80 bg-base-100 p-6 shadow-md z-20 border-r border-base-200">
                    <div className="mb-10 hidden lg:block">
                        <h2 className="text-xl font-black text-primary flex items-center gap-2">
                            <FaThLarge /> Dashboard
                        </h2>
                        <p className="text-[10px] opacity-50 uppercase tracking-widest font-bold mt-1">
                            AI Model Inventory System
                        </p>
                    </div>

                    <ul className="menu menu-md space-y-2 p-0">
                        {sideLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink 
                                    to={link.path}
                                    end // শুধু /dashboard এর জন্য যাতে অন্যগুলোতে একটিভ না দেখায়
                                    className={({ isActive }) => 
                                        `flex items-center gap-4 py-4 rounded-2xl font-bold transition-all ${
                                            isActive ? "bg-primary text-white shadow-lg shadow-primary/30" : "hover:bg-primary/10"
                                        }`
                                    }
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-4 md:p-8 lg:p-10">
                    <div className="bg-base-100 min-h-[70vh] rounded-[2rem] lg:rounded-[3rem] shadow-sm border border-base-300 p-6 md:p-10 overflow-hidden">
                        {/* সাব-রাউটগুলোর কন্টেন্ট এখানে দেখাবে */}
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* ৩. ফুটার সেকশন */}
            <Footer />
        </div>
    );
};

export default DashboardLayout;