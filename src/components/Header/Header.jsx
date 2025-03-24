import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { logout } from "@/components/Redux/AuthSlice/authSlice";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Header = ({ setIsOpen }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const SubmitLogout = () => {
        dispatch(logout()); // Clears Redux & localStorage
        navigate("/");
    }
    return (
        <>
            <header className="bg-white text-gray-950 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" onClick={() => setIsOpen(prev => !prev)}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                            <User className="h-6 w-6" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white text-black rounded-md shadow-md w-48">
                        <DropdownMenuItem className="p-2 hover:bg-gray-200 cursor-pointer">Profile</DropdownMenuItem>
                        <DropdownMenuItem className="p-2 hover:bg-gray-200 cursor-pointer">Settings</DropdownMenuItem>
                        <DropdownMenuItem onClick={SubmitLogout} className="p-2 hover:bg-gray-200 cursor-pointer text-red-600 flex items-center">
                            <LogOut className="h-4 w-4 mr-2" /> Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
        </>
    )
}

export default Header