import React from "react";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getListingById from "@/app/actions/getListingById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingClient from "@/app/listings/[listingId]/ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({params}: { params: IParams }) => {
    const listing = await getListingById(params);
    const reservation = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <EmptyState/>
        );
    }

    return (
        <Container>
            <ListingClient listing={listing} currentUser={currentUser} reservations={reservation}/>
        </Container>
    );
};

export default ListingPage;
