"use client";
import React from "react";
import {SafeListing, SafeUser} from "@/app/types";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/Listings/ListingCard";

interface IFavoritesClientProps {
    listings: SafeListing[];
    currentUser: SafeUser | null;
}

const FavoritesClient: React.FC<IFavoritesClientProps> = ({listings, currentUser}) => {
    return (
        <Container>
            <Heading
                title="Here are your favorite listings"
                subtitle="Has listings of places you have been to or hope to visit"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mt-10">
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        currentUser={currentUser}
                        data={listing}
                    />
                ))}
            </div>
        </Container>
    );
};

export default FavoritesClient;
