import React from "react";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder-image.jpg";

interface IAvatarProps {
    src?: string | null | undefined;
}

const Avatar: React.FC<IAvatarProps> = ({src}) => {
    return (
        <div>
            <Image src={src || Placeholder} className="object-cover rounded-full h-8 w-8" alt="placeholder image"/>
        </div>
    );
};

export default Avatar;
