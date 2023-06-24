"use client";
import React, {useCallback, useState} from "react";
import {SafeReservation, SafeUser} from "@/app/types";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/Listings/ListingCard";

interface IReservationClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}

const ReservationClient: React.FC<IReservationClientProps> = ({reservations, currentUser}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState("");

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`api/reservations/${id}`)
            .then(() => {
                toast.success("Reservation canceled");
                router.refresh();
            })
            .catch(() => {
                toast.error("Something went wrong");
            })
            .finally(() => {
                setDeletingId("");
            });
    }, [router]);

    return (
        <div>
            <Heading
                title="Reservations"
                subtitle="Your reservations"
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        currentUser={currentUser}
                        actionId={reservation.id}
                        disabled={deletingId === reservation.id}
                        actionLabel="Delete reservation"
                    />
                ))}
            </div>
        </div>
    );
};

export default ReservationClient;
