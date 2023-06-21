"use client";
import React from "react";
import {IconType} from "react-icons";

interface ICategoryViewProps {
    icon: IconType;
    label: string;
    description: string;
}

const ListingCategory: React.FC<ICategoryViewProps> = ({icon: Icon, label, description}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                <Icon size={40} className="text-neutral-600"/>
                <div className="text-lg font-semibold">{label}</div>
                <div>{description}</div>
            </div>
        </div>
    );
};

export default ListingCategory;
