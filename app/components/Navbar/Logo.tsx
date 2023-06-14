"use client";
import React from "react";
import LogoImage from "@/public/images/Airbnb_logo_PNG3.png";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div className="md:block hidden">
            <Image
                onClick={() => router.push("/")}
                src={LogoImage}
                width={100}
                height={100}
                className="lg:block hidden object-cover cursor-pointer" alt="logo"
            />
        </div>
    );
};

export default Logo;
