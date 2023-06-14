"use client";
import React, {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "@/app/components/Avatar";
import MenuItem from "@/app/components/Navbar/MenuItem";
import registrationModal from "@/app/components/Modals/RegistrationModal";
import UseRegistrationModal from "@/app/hooks/UseRegistrationModal";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const registrationModal = UseRegistrationModal();
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="flex items-center gap-4">
            <div>
                <h3 className="text-sm md:block hidden hover:bg-neutral-100 rounded-full px-4 py-3 cursor-pointer transition duration-300">
                    Home zone your home
                </h3>
            </div>

            <div onClick={toggle}
                 className="flex items-center gap-2 cursor-pointer border border-neutral-300 rounded-full px-2 py-1">
                <AiOutlineMenu/>
                <div>
                    <Avatar/>
                </div>
            </div>

            {/*dropdown menu*/}
            {isOpen && (
                <div
                    className="absolute rounded-xl shadow-md w-[40vw] lg:w-[10vw] bg-white overflow-hidden lg:right-32 right-7 top-20 text-sm">
                    <div className="flex flex-col gap-2 cursor-pointer">
                        <MenuItem onClick={() => {
                        }} label="Login"/>
                        <MenuItem onClick={registrationModal.onOpen} label="Register"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
