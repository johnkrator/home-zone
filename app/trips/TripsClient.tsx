"use client";
import React, {useCallback, useState} from "react";
import {SafeReservation, SafeUser} from "@/app/types";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/Listings/ListingCard";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

interface ITripsClientProps {
    currentUser?: SafeUser | null;
    reservations: SafeReservation[];
}

const TripsClient: React.FC<ITripsClientProps> = ({currentUser, reservations}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState("");

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                toast.success("Reservation canceled");
                router.refresh();
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error);
            })
            .finally(() => {
                setDeletingId("");
            });
    }, [router]);

    return (
        <Container>
            <Heading title="Trips" subtitle="Where you've been and where you'll be"/>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-6">
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        actionId={reservation.id}
                        onAction={onCancel}
                        disabled={deletingId === reservation.id}
                        actionLabel="Cancel reservation"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
};

export default TripsClient;
