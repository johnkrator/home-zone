"use client";
import React, {useCallback, useMemo} from "react";
import {format} from "date-fns";
import {SafeListing, SafeReservation, SafeUser} from "@/app/types";
import {useRouter} from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import Image from "next/image";
import HeartButton from "@/app/components/HeartButton";
import Button from "@/app/components/Button";

interface IListingCardProps {
    data: SafeListing;
    reservation?: SafeReservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}

const ListingCard: React.FC<IListingCardProps> = ({
                                                      data,
                                                      reservation,
                                                      onAction,
                                                      disabled,
                                                      actionLabel,
                                                      actionId = "",
                                                      currentUser
                                                  }) => {
    const router = useRouter();
    const {getByValue} = useCountries();
    const location = getByValue(data.locationValue);

    const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (disabled) {
            return;
        }

        onAction?.(actionId);
    }, [onAction, actionId, disabled]);

    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }

        return data.price;
    }, [reservation, data.price]);

    const reservationDate = useMemo(() => {
        if (!reservation) {
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, "PP")} - ${format(end, "PP")}`;
    }, [reservation]);

    return (
        <div onClick={() => router.push(`/listings/${data.id}`)} className="col-span-1 cursor-pointer group">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                <Image src={data.imageSrc} alt="listing" fill
                       className="object-cover h-full w-full group-hover:scale-110 transition"/>
                <div className="absolute top-3 right-3">
                    <HeartButton listingId={data.id} currentUser={currentUser}/>
                </div>
            </div>

            <div className="font-semibold text-lg">
                {location?.region}, {location?.label}
            </div>

            <div className="font-light text-neutral-500">
                {reservationDate || data.category}
            </div>

            <div className="flex flex-row items-center gap-1">
                <div className="font-semibold">
                    $ {price}
                </div>
                {!reservationDate && (
                    <div className="font-light">night</div>
                )}
            </div>
            {onAction && actionLabel && (
                <Button disabled={disabled} small label={actionLabel} onClick={handleCancel}/>
            )}
        </div>
    );
};

export default ListingCard;
