"use client";
import React from "react";
import Logo from "@/app/components/Navbar/Logo";
import Search from "@/app/components/Navbar/Search";
import UserMenu from "@/app/components/Navbar/UserMenu";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white font-bold md:text-xl text-xs shadow-md">
            <div className="container flex justify-between py-4 items-center">
                <Logo/>
                <Search/>
                <UserMenu/>
            </div>
        </div>
    );
};

export default Navbar;
