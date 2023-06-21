"use client";
import React from "react";
import {SafeUser} from "@/app/types";
import {IconType} from "react-icons";
import useCountries from "@/app/hooks/useCountries";
import Avatar from "@/app/components/Avatar";
import ListingCategory from "@/app/components/Listings/ListingCategory";
import Map from "@/app/components/Map";

interface IListingInfoProps {
    user: SafeUser;
    description: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    category: {
        icon: IconType,
        label: string,
        description: string,
    } | undefined;
    locationValue: string;
}

const ListingInfo: React.FC<IListingInfoProps> = ({
                                                      user,
                                                      description,
                                                      guestCount,
                                                      roomCount,
                                                      bathroomCount,
                                                      category,
                                                      locationValue
                                                  }) => {
    const {getByValue} = useCountries();
    const coordinates = getByValue(locationValue)?.latlng;

    return (
        <div className="flex flex-col gap-4">
            <div>
                <div className="flex flex-row items-center text-xl font-semibold gap-2">
                    <div>Hosted by {user?.name}</div>
                    <Avatar src={user?.image}/>
                </div>

                <div className="flex flex-row items-center text-neutral-500 font-light gap-2">
                    <div>{guestCount} guests</div>
                    <div>{roomCount} rooms</div>
                    <div>{bathroomCount} bathrooms</div>
                </div>
            </div>
            <hr/>
            {category && (
                <ListingCategory icon={category.icon} label={category.label} description={category.description}/>
            )}
            <hr/>
            <div className="text-lg font-light text-neutral-500">{description}</div>
            <hr/>
            <Map center={coordinates}/>
        </div>
    );
};

export default ListingInfo;
