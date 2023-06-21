"use client";
import React from "react";
import {Range} from "react-date-range";

interface IListingReservationProps {
    price: number;
    dateRange: Range;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDate: Date[];
}

const ListingReservation: React.FC<IListingReservationProps> = ({
                                                                    price,
                                                                    dateRange,
                                                                    totalPrice,
                                                                    onChangeDate,
                                                                    onSubmit,
                                                                    disabled,
                                                                    disabledDate
                                                                }) => {
    return (
        <div>
            ListingReservation
        </div>
    );
};

export default ListingReservation;
