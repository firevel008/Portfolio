import React, { useState } from 'react'
import { Edit, MapPin, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("experience");
    return (
        <>
            <div className="max-w-4xl mx-auto p-6">
                {/* Profile Section */}
                <Card className="mb-6 p-4 shadow-lg">
                    <CardHeader className="flex items-center space-x-4">
                        <img
                            src="../src/assets/Profile-img.jpg"
                            alt="Profile"
                            className="w-20 h-20 rounded-full border"
                        />
                        <div>
                            <CardTitle className="text-xl">Cristiana Justin</CardTitle>
                            <p className="text-gray-600 flex items-center">
                                <MapPin className="h-4 w-4 mr-1" /> New York, USA
                            </p>
                        </div>
                        <Button className="ml-auto" variant="outline">
                            <Edit className="h-4 w-4 mr-1" /> Edit Profile
                        </Button>
                    </CardHeader>
                </Card>

                <nav className="mt-6 border-b flex space-x-6">
                    <NavLink to="experience" className={({ isActive }) => isActive ? "border-b-2 border-blue-500 pb-2 text-blue-500" : "pb-2"}>
                        Experience
                    </NavLink>
                    <NavLink to="biography" className={({ isActive }) => isActive ? "border-b-2 border-blue-500 pb-2 text-blue-500" : "pb-2"}>
                        Biography
                    </NavLink>
                    <NavLink to="skills" className={({ isActive }) => isActive ? "border-b-2 border-blue-500 pb-2 text-blue-500" : "pb-2"}>
                        Skills
                    </NavLink>
                    <NavLink to="portfolio" className={({ isActive }) => isActive ? "border-b-2 border-blue-500 pb-2 text-blue-500" : "pb-2"}>
                        Portfolio
                    </NavLink>
                </nav>

                {/* Tab Content (from child routes) */}
                <div className="mt-6">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard