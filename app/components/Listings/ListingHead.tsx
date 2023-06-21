"use client";
import React from "react";
import {SafeUser} from "@/app/types";
import useCountries from "@/app/hooks/useCountries";
import Heading from "@/app/components/Heading";
import Image from "next/image";

interface IListingHeadProps {
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: SafeUser | null;
}

const ListingHead: React.FC<IListingHeadProps> = ({title, locationValue, imageSrc, id, currentUser}) => {
    const {getByValue} = useCountries();
    const location = getByValue(locationValue);

    return (
        <div className="flex flex-col gap-4">
            <Heading title={title} subtitle={`${location?.region},${location?.label}`}/>
            <div className="w-full h-[60vh] overflow-hidden relative">
                <Image src={imageSrc} fill className="object-cover w-full rounded-xl" alt="property image"/>
            </div>
        </div>
    );
};

export default ListingHead;
