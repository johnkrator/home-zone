"use client";
import React from "react";

const UserMenu = () => {
    return (
        <div className="flex items-center gap-4">
            <div>
                <h3 className="text-sm md:block hidden hover:bg-neutral-100 rounded-full px-2 py-1 cursor-pointer transition duration-300">
                    Home zone your home
                </h3>
            </div>

            <div className="cursor-pointer">
                person
            </div>
        </div>
    );
};

export default UserMenu;
