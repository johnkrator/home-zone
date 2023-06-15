"use client";
import React from "react";
import Logo from "@/app/components/Navbar/Logo";
import Search from "@/app/components/Navbar/Search";
import UserMenu from "@/app/components/Navbar/UserMenu";
import {User} from "@prisma/client";
import {SafeUser} from "@/app/types";

interface INavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<INavbarProps> = ({currentUser}) => {
    console.log({currentUser});
    return (
        <div className="sticky top-0 z-50 bg-white font-bold md:text-xl text-xs border-b border-gray-200">
            <div className="container flex justify-between py-4 items-center">
                <Logo/>
                <Search/>
                <UserMenu currentUser={currentUser}/>
            </div>
        </div>
    );
};

export default Navbar;
