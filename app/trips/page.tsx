import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import getReservations from "@/app/actions/getReservations";
import TripsClient from "@/app/trips/TripsClient";

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <EmptyState
                title="Unathorized"
                subtitle="Please login to view trips"
            />
        );
    }

    const reservations = await getReservations({userId: currentUser.id});

    if (reservations.length === 0) {
        return (
            <EmptyState
                title="No trips found!"
                subtitle="You have not booked any trip!"
            />
        );
    }

    return (
        <div>
            <TripsClient reservations={reservations} currentUser={currentUser}/>
        </div>
    );
};

export default TripsPage;
