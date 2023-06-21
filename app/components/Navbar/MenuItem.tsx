"use client";
import React from "react";

interface IMenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({onClick, label}) => {
    return (
        <div onClick={onClick}
             className="px-4 py-3 hover:bg-neutral-100 text-sm whitespace-nowrap cursor-pointer transition duration-300">
            {label}
        </div>
    );
};

export default MenuItem;
