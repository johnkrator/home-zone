import React from "react";
import {IconType} from "react-icons";

interface ICategoryInputProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<ICategoryInputProps> = ({icon: Icon, label, selected, onClick}) => {
    return (
        <div onClick={() => onClick(label)} className={`rounded-xl border px-4 py-2 flex flex-col gap-1 hover:border-gray-800 transition cursor-pointer 
        ${selected ? "border-gray-800" : "border-gray-400"}
        `}>
            <Icon size={30}/>
            <div className="font-semibold">
                {label}
            </div>
        </div>
    );
};

export default CategoryInput;
