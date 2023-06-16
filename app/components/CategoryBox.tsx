"use client";
import React, {useCallback} from "react";
import {IconType} from "react-icons";
import {useRouter, useSearchParams} from "next/navigation";
import qs from "query-string";

interface ICategoryBox {
    label: string
    icon: IconType,
    selected: boolean
}

const CategoryBox: React.FC<ICategoryBox> = ({label, icon: Icon, selected}) => {
    const params = useSearchParams();
    const router = useRouter();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery = {...currentQuery, category: label} as any;

        if (params?.get("category") === label) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, {skipNull: true});

        router.push(url);
    }, [label, router, params]);

    return (
        <>
            <div className={`flex flex-col gap-1 lg:p-0 border-b-2 p-2 pt-3 cursor-pointer
            ${selected ? "border-b-neutral-800" : "border-b-transparent"}
            ${selected ? "text-neutral-800" : "text-inherit"}
            `}
                 onClick={handleClick}
            >
                <Icon size={28}/>
                <div className="font-semibold text-sm">
                    {label}
                </div>
            </div>
        </>
    );
};

export default CategoryBox;
