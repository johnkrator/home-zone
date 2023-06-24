import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import FavoritesClient from "@/app/favorites/FavoritesClient";

const FavoritesPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <EmptyState
                title="You have no favorite listings yet"
                subtitle="Go to search page and like some listings"
            />
        );
    }

    return (
        <FavoritesClient listings={listings} currentUser={currentUser}/>
    );
};

export default FavoritesPage;
