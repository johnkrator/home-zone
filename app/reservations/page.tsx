import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import ReservationClient from "@/app/reservations/ReservationClient";
import Container from "@/app/components/Container";
import getReservations from "@/app/actions/getReservations";

const ReservationPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <EmptyState
                title="Unauthorized! You must be logged in to view this page."
                subtitle="Please log in to view your reservations"
            />
        );
    }

    const reservations = await getReservations({authorId: currentUser.id});

    if (reservations.length === 0) {
        return (
            <EmptyState
                title="You have no reservations"
                subtitle="Start by adding a new reservation"
            />
        );
    }

    return (
        <Container>
            <ReservationClient reservations={reservations} currentUser={currentUser}/>
        </Container>
    );
};

export default ReservationPage;
