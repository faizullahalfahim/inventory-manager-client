import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FaUserEdit, FaEnvelope, FaCalendarAlt, FaIdBadge, FaShieldAlt } from 'react-icons/fa';

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Profile Header Card */}
            <div className="relative mb-8">
                {/* Background Pattern/Cover */}
                <div className="h-48 bg-gradient-to-r from-primary to-purple-600 rounded-t-[2.5rem]"></div>
                
                {/* Profile Image & Basic Info */}
                <div className="px-10 -mt-16 flex flex-col md:flex-row items-end gap-6">
                    <div className="avatar">
                        <div className="w-32 md:w-40 rounded-3xl ring-8 ring-base-100 shadow-2xl">
                            <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} alt="User profile" />
                        </div>
                    </div>
                    <div className="mb-4 flex-1">
                        <h1 className="text-3xl font-black text-base-content">{user?.displayName || "Anonymous User"}</h1>
                        <p className="text-primary font-bold flex items-center gap-2">
                            <FaShieldAlt /> AI Model Developer
                        </p>
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-primary rounded-2xl px-6 gap-2 shadow-lg shadow-primary/20">
                            <FaUserEdit /> Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Detailed Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {/* Personal Information */}
                <div className="bg-base-200/50 p-8 rounded-[2rem] border border-base-300">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <FaIdBadge className="text-primary" /> Personal Information
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center text-primary shadow-sm">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-xs opacity-50 font-bold uppercase tracking-wider">Email Address</p>
                                <p className="font-semibold text-base-content">{user?.email}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center text-primary shadow-sm">
                                <FaCalendarAlt />
                            </div>
                            <div>
                                <p className="text-xs opacity-50 font-bold uppercase tracking-wider">Joined Date</p>
                                <p className="font-semibold text-base-content">
                                    {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "January 2026"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Stats / Status */}
                <div className="bg-base-200/50 p-8 rounded-[2rem] border border-base-300 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-6">Account Status</h3>
                    <div className="stats stats-vertical shadow bg-base-100 rounded-2xl">
                        <div className="stat">
                            <div className="stat-title text-xs font-bold uppercase">Membership</div>
                            <div className="stat-value text-primary text-2xl">Premium</div>
                            <div className="stat-desc">Active since 2026</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-xs font-bold uppercase">Account ID</div>
                            <div className="stat-desc font-mono truncate">{user?.uid || "UID-10293847"}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Account Settings Placeholder */}
            <div className="mt-8 p-8 bg-primary/5 rounded-[2rem] border border-primary/10 mx-4 text-center">
                <p className="text-base-content/70 italic text-sm">
                    "Manage your public profile settings and how users see you on the AI Inventory platform."
                </p>
            </div>
        </div>
    );
};

export default MyProfile;