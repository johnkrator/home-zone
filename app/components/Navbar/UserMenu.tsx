"use client";
import React, {useCallback, useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "@/app/components/Avatar";
import MenuItem from "@/app/components/Navbar/MenuItem";
import UseRegistrationModal from "@/app/hooks/UseRegistrationModal";
import UseLoginModal from "@/app/hooks/UseLoginModal";
import {signOut} from "next-auth/react";
import {SafeUser} from "@/app/types";
import useRentModal from "@/app/hooks/useRentModal";

interface IUserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<IUserMenuProps> = ({currentUser}) => {
    const [isOpen, setIsOpen] = useState(false);
    const registrationModal = UseRegistrationModal();
    const loginModal = UseLoginModal();
    const toggle = () => setIsOpen(!isOpen);
    const rentModal = useRentModal();

    const rent = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        return rentModal.onOpen();
    }, [currentUser, loginModal, rentModal]);

    return (
        <div className="flex items-center gap-4">
            <div onClick={rent}>
                <h3 className="text-sm md:block hidden hover:bg-neutral-100 rounded-full px-4 py-3 cursor-pointer transition duration-300">
                    Create new property
                </h3>
            </div>

            <div onClick={toggle}
                 className="flex items-center gap-2 cursor-pointer border border-neutral-300 rounded-full px-2 py-1">
                <AiOutlineMenu/>
                <div>
                    <Avatar src={currentUser?.image}/>
                </div>
            </div>

            {/*dropdown menu*/}
            {isOpen && (
                <div
                    className="absolute rounded-xl shadow-md w-[40vw] lg:w-[10vw] bg-white overflow-hidden lg:right-20 right-7 top-20 text-sm">
                    <div className="flex flex-col gap-2 cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem onClick={() => {
                                }} label="My Trips"/>
                                <MenuItem onClick={() => {
                                }} label="My Reservations"/>
                                <MenuItem onClick={() => {
                                }} label="My Favorites"/>
                                <MenuItem onClick={() => {
                                }} label="My Properties"/>
                                <MenuItem onClick={() => {
                                }} label="Your Home Zone"/>
                                <hr/>
                                <MenuItem onClick={() => signOut()} label="Logout"/>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={loginModal.onOpen} label="Login"/>
                                <MenuItem onClick={registrationModal.onOpen} label="Register"/>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
