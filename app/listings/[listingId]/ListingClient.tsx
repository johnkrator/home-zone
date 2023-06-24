"use client";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {SafeListing, SafeReservation, SafeUser} from "@/app/types";
import useLoginModal from "@/app/hooks/useLoginModal";
import {useRouter} from "next/navigation";
import {differenceInCalendarDays, eachDayOfInterval} from "date-fns";
import {categories} from "@/app/components/Navbar/Categories";
import {Range} from "react-date-range";
import axios from "axios";
import toast from "react-hot-toast";
import ListingHead from "@/app/components/Listings/ListingHead";
import ListingInfo from "@/app/components/Listings/ListingInfo";
import ListingReservation from "@/app/components/Listings/ListingReservation";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
};

interface IListingClientProps {
    reservations?: SafeReservation[];
    listing: SafeListing & {
        user: SafeUser
    };
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<IListingClientProps> = ({reservations = [], listing, currentUser}) => {
    const loginModal = useLoginModal();
    const router = useRouter();

    const disableDates = useMemo(() => {
        let dates: Date[] = [];

        reservations.forEach((reservation) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate)
            });
            dates = [...dates, ...range];
        });
        return dates;
    }, [reservations]);

    const category = useMemo(() => {
        return categories.find((item) =>
            item.label === listing.category
        );
    }, [listing.category]);

    const [isLoading, setIsLoading] = useState(false);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [totalPrice, setTotalPrice] = useState(listing.price);

    const onCreateReservation = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        setIsLoading(true);

        axios.post("/api/reservations", {
            totalPrice,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            listingId: listing?.id
        })
            .then(() => {
                toast.success("Reservation created successfully");
                setDateRange(initialDateRange);
                router.push("/trips");
            })
            .catch(() => {
                toast.error("Something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [totalPrice, dateRange, listing, currentUser, router, loginModal]);

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(dateRange.endDate, dateRange.startDate);

            if (dayCount && listing.price) {
                setTotalPrice(dayCount * listing.price);
            } else {
                setTotalPrice(listing.price);
            }
        }
    }, [dateRange, listing.price]);

    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col gap-6">
                <ListingHead
                    title={listing.title}
                    locationValue={listing.locationValue}
                    imageSrc={listing.imageSrc}
                    id={listing.id} currentUser={currentUser}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-6">
                    <ListingInfo
                        user={listing.user}
                        category={category}
                        description={listing.description}
                        roomCount={listing.roomCount}
                        guestCount={listing.guestCount}
                        bathroomCount={listing.bathroomCount}
                        locationValue={listing.locationValue}
                    />

                    <div className="">
                        <ListingReservation
                            price={listing.price}
                            totalPrice={totalPrice}
                            dateRange={dateRange}
                            onChangeDate={(value) => setDateRange(value)}
                            disabledDate={disableDates}
                            onSubmit={onCreateReservation}
                            disabled={isLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingClient;
