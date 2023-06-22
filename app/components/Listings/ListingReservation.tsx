"use client";
import React from "react";
import {Range} from "react-date-range";
import Calendar from "@/app/components/Inputs/Calendar";
import Button from "@/app/components/Button";

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
        <div className="bg-inherit flex flex-col gap-4">
            <div className="flex items-center flex-row gap-1 p-4">
                <div className="font-semibold text-2xl">{price}</div>
                <div>night</div>
            </div>
            <hr/>
            <Calendar
                value={dateRange}
                disabledDates={disabledDate}
                onChange={(value) => onChangeDate(value.selection)}
            />
            <hr/>

            <div className="flex flex-row items-center p-4">
                <div>Total Price</div>
                <div>{totalPrice}</div>
            </div>
            <hr/>

            <div className="py-4">
                <Button label="Make your reservation" onClick={onSubmit} disabled={disabled}/>
            </div>
        </div>
    );
};

export default ListingReservation;
