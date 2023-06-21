import React from "react";
import getListings, {IListingParams} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/Listings/ListingCard";

export const dynamic = "force-dynamic";

interface IHomePageProps {
    searchParams: IListingParams;
}

const HomePage = async ({searchParams}: IHomePageProps) => {
    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <EmptyState showReset/>
        );
    }

    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {listings.map((listing) => (
                    <ListingCard
                        data={listing}
                        key={listing.id}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
};

export default HomePage;
