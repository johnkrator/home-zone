"use client";
import React from "react";
import {IconType} from "react-icons";

interface ICategoryBox {
    label: string
    icon: IconType,
    selected: boolean
}

const CategoryBox: React.FC<ICategoryBox> = ({label, icon: Icon, selected}) => {
    return (
        <div className={`flex flex-col gap-1 lg:p-0 p-2 pt-3 cursor-pointer`}>
            <Icon size={28}/>
            <div className="font-semibold text-sm">
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;
