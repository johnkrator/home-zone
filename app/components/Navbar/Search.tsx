"use client";
import React, {useMemo} from "react";
import {BsSearch} from "react-icons/bs";
import useSearchModal from "@/app/hooks/useSearchModal";
import {useSearchParams} from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import {differenceInDays} from "date-fns";

const Search = () => {
    const searchModal = useSearchModal();
    const params = useSearchParams();
    const {getByValue} = useCountries();

    const locationValue = params?.get("locationValue");
    const startDate = params?.get("startDate");
    const endDate = params?.get("endDate");
    const guestCount = params?.get("guestCount");

    const locationLabel = useMemo(() => {
        if (locationValue) {
            return getByValue(locationValue as string)?.label;
        }

        return "Anywhere";
    }, [getByValue, locationValue]);

    const durationLabel = useMemo(() => {
        if (startDate && endDate) {
            const start = new Date(startDate as string);
            const end = new Date(endDate as string);
            let diff = differenceInDays(end, start);

            if (diff === 0) {
                diff = 1;
            }

            return `${diff} / Days`;
        }

        return "Any week";
    }, [startDate, endDate]);

    const guestLabel = useMemo(() => {
        if (guestCount) {
            return `${guestCount} Guest`;
        }

        return "Add guest";
    }, [guestCount]);

    return (
        <div onClick={searchModal.onOpen} className="border-[1px] rounded-full border-gray-300">
            <div
                className="flex flex-row items-center text-sm gap-3 shadow-md rounded-full px-14 py-4 hover:shadow-lg transition cursor-pointer whitespace-nowrap">
                <div>
                    {locationLabel}
                </div>

                <div className="md:block hidden border-l border-gray-300 h-4 my-auto mx-2"/>

                <div className="md:block hidden">
                    {durationLabel}
                </div>

                <div className="md:block hidden border-l border-gray-300 h-4 my-auto mx-2"/>

                <div className="relative flex items-center">
                    <h3 className="md:block hidden">
                        {guestLabel}
                    </h3>
                    <BsSearch
                        className="absolute md:-top-1 md:left-20 -top-3.5 left-3 bg-rose-500 rounded-full p-2 text-white"
                        size={30}/>
                </div>
            </div>
        </div>
    );
};

export default Search;
