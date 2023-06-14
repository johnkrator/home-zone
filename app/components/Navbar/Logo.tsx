"use client";
import React from "react";
import LogoImage from "@/public/images/logo1.jpg";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div className="md:block hidden">
            <Image
                onClick={() => router.push("/")}
                src={LogoImage}
                className="object-cover w-10 h-10 rounded-full cursor-pointer" alt="logo"
            />
        </div>
    );
};

export default Logo;
