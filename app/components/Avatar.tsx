import React from "react";
import Image from "next/image";
import Placeholder from "@/public/images/placeholder-image.jpg";

interface IAvatarProps {
    src?: string | null | undefined;
}

const Avatar: React.FC<IAvatarProps> = ({src}) => {
    return (
        <div>
            <Image
                src={src || Placeholder}
                width={30} height={30}
                className="object-cover rounded-full"
                alt="placeholder image"
            />
        </div>
    );
};

export default Avatar;
