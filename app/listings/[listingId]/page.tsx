"use client";
import React from "react";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({params}: { params: IParams }) => {
    // const listing = await getListingById(params);
    // const currentUser = await getCurrentUser();
    const isEmpty = true;

    if (isEmpty) {
        return (
            <EmptyState/>
        );
    }

    return (
        <Container>
            ListingPage
        </Container>
    );
};

export default ListingPage;
