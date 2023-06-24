import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import getListings from "@/app/actions/getListings";
import Container from "@/app/components/Container";
import PropertyClient from "@/app/properties/PropertyClient";

const PropertyPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <EmptyState
                title="You are not logged in"
                subtitle="Please login to view your properties"
            />
        );
    }

    const listings = await getListings({userId: currentUser.id});

    if (listings.length === 0) {
        return (
            <EmptyState
                title="You have no properties"
                subtitle="Please add a property to view it"
            />
        );

    }

    return (
        <Container>
            <PropertyClient listings={listings} currentUser={currentUser}/>
        </Container>
    );
};

export default PropertyPage;
