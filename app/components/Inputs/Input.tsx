"use client";
import React from "react";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import {BiDollar} from "react-icons/bi";

interface IInputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<IInputProps> = ({id, label, type, disabled, formatPrice, required, register, errors}) => {
    return (
        <div className="relative w-full">
            {formatPrice && (
                <BiDollar size={24} className="text-neutral-500 absolute top-5 left-2"/>
            )}
            <input
                id={id}
                disabled={disabled} {...register(id, {required})}
                placeholder=" "
                type={type}
                className={`peer w-full border border-gray-300 rounded-md px-4 py-2 w-full text-sm focus:outline-none focus:border-blue-500 disabled:cursor-not-allowed transition disabled:opacity-70
                ${formatPrice ? "pl-9" : "pl-4"}
                ${errors[id] ? "border-red-500" : "border-neutral-300"}
                ${errors[id] ? "focus:border-red-500" : "focus:border-black-500"}}
             `}/>

            <label className={`absolute text-md duration-150 transform -translate-y-3 top-2 z-0 origin-[0]
                ${formatPrice ? "left-9" : "left-4"}
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors[id] ? "text-rose-500" : "text-zinc-400"}
            `}>
                {label}
            </label>
        </div>
    );
};

export default Input;
