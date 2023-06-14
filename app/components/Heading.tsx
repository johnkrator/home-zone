"use client";
import React from "react";

interface IHeadingProps {
    title: string;
    subtitle: string;
    center?: boolean;
}

const Heading: React.FC<IHeadingProps> = ({title, subtitle, center}) => {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <div className="font-bold text-2xl">
                {title}
            </div>
            <div className="">
                {subtitle}
            </div>
        </div>
    );
};

export default Heading;
