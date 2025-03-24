import React, { useState } from 'react'
import { Menu, Home, LayoutGrid, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = ({ isOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();
    function NavItem({ icon, text, isOpen, path }) {
        const isActive = location.pathname === path;
        return (
            <div onClick={() => navigate(path)} className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-colors ${isActive ? "bg-gray-100" : " hover:bg-gray-100"}`}>
                {icon}
                {isOpen && <span>{text}</span>}
            </div>
        );
    }


    return (
        <>
            <aside className={`text-gray-700 p-4 transition-all ${isOpen ? "w-64" : "w-16"}`}>
                <div className="items-center space-x-4">
                    <img
                        src={`${isOpen ? "../public/logo.jpg" : "../public/logo-icon.jpg"}`}
                        alt="Profile"
                        className=""
                    />
                </div>
                <nav className="mt-4 space-y-4">
                    <NavItem icon={<Home />} text="Home" path="/home" isOpen={isOpen} />
                    <NavItem icon={<LayoutGrid />} text="Dashboard" path="/dashboard/experience" isOpen={isOpen} />
                    <NavItem icon={<User />} text="Profile" path="/profile" isOpen={isOpen} />
                </nav>
            </aside>
        </>
    )
}

export default SideBar