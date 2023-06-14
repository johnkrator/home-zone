"use client";
import React from "react";
import LogoImage from "@/public/images/F95Zone.to_logo_PNG2.png";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div className="md:block hidden">
            {/*<Image src={"Home Zone"} className="object-cover w-20 h-20" alt="logo"/>*/}
            <h1 onClick={() => router.push("/")}>Home Zone</h1>
        </div>
    );
};

export default Logo;
