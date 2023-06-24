"use client";
import React, {useCallback, useState} from "react";
import {SafeListing, SafeUser} from "@/app/types";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/Listings/ListingCard";

interface IPropertyClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
};

const PropertyClient: React.FC<IPropertyClientProps> = ({listings, currentUser}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState("");

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/listing/${id}`)
            .then(() => {
                toast.success("Listing deleted");
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
        <div>
            <Heading title="Your Properties" subtitle="Manage your listings here"/>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        actionId={listing.id}
                        data={listing}
                        actionLabel="Delete property"
                        onAction={onCancel}
                        currentUser={currentUser}
                        disabled={deletingId === listing.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default PropertyClient;
